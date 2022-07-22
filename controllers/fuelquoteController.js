const path = require('path');
const Quote = require("../models/fuelquote.js");
const Client = require("../models/client.js");

exports.quote_info_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/fuelquote.html'));
};

exports.quote_info_post = async function(req, res) {
    console.log(req.body);

    let galreq, address, rate, total;

    let username = req.params.user;

    galreq = req.body.galreq;
    address = req.body.address;
    rate = req.body.rate;
    total = req.body.total;

    let clientInfo = await Client.findOne({
        username: username,
    });

    if(!clientInfo)
    {
        res.send("Error: Cannot find user");
    }
    else {
        let quote = new Quote({
            requester: clientInfo,
            in_state: clientInfo.in_state,
            amount_requested: galreq,
            fuel_rate: rate,
            delivery_address: address,
            total_cost: total,
        })

        clientInfo.quote_history.push(quote);

        await clientInfo.save();

        await quote.save();
    }

    

    res.sendFile(path.join(__dirname, '../public/fuelquote.html'));
}

exports.quote_history_get = function(req, res) {
    
    res.sendFile(path.join(__dirname, '../public/fuelquotetable.html'));
}
