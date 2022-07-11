var Quote = require('../models/fuelquote');
const path = require('path');

exports.quote_info_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/fuelquote.html'));
};

exports.quote_info_post = function(req, res) {
    /*
    function testQuote() {


        console.log("Amount Requested: " + amountRequested);
        console.log("Delivery Date: " + deliveryDate);
        console.log("Fuel Rate: " + fuelRate);
        console.log("Total Due: " + totalDue);

        // Save to DB;
    }
    let amountRequested = req.body.galreq;
    let deliveryDate = req.body.deldate;
    let fuelRate = req.body.rate;
    let totalDue = req.body.total;

    testQuote;
    */
    res.send("POST Quote to DB");
}

exports.quote_history_get = function(req, res) {
    
    res.sendFile(path.join(__dirname, '../public/fuelquotetable.html'));
}
