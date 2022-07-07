var Quote = require('../models/fuelquote');
const path = require('path');

exports.quote_info_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/fuelquote.html'));
}

exports.quote_info_post = function(req, res) {
    console.log("Request Body: " + req.body);
    
    let gallonsRequested, address, deliveryDate, fuelRate, totalAmount;

    gallonsRequested = req.body.galreq;
    address = req.body.address;
    deliveryDate = req.body.deldate;
    fuelRate = req.body.price;
    totalAmount = req.body.due;

    // TODO: POST data into DB
    
    res.send("NOT IMPLEMENTED: Quote info POST");
    
    // Return to homepage
    res.redirect('/fuelquote');
}

exports.quote_history_get = function(req, res) {
    
    // TODO: Get data from DB, write to table

    res.sendFile(path.join(__dirname, '../public/fuelquotetable.html'));
}
