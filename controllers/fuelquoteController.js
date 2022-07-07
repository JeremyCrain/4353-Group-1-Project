var Quote = require('../models/fuelquote');
const path = require('path');

exports.quote_info_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/fuelquote.html'));
}

exports.quote_info_post = function(req, res) {
    let gallonsRequested = req.body.galreq;
    let deliveryDate = req.body.deldate;
    let fuelRate = req.body.price;
    
    res.send("NOT IMPLEMENTED: Quote info POST");
}

exports.quote_history_get = function(req, res) {
    
    res.sendFile(path.join(__dirname, '../public/fuelquotetable.html'));
}
