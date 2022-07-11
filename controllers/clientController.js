var Client = require('../models/client');
const path = require('path');

exports.edit_profile_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/profile.html'));
};

exports.edit_profile_post = function(req, res) {
    console.log("Request Body: " + req.body);

    let name, address1, address2, city, state, zip;

    name = req.body.name;
    address1 = req.body.add1;
    address2 = req.body.add2;
    city = req.body.city;
    state = req.body.states;
    zip = req.body.zip;

    // TODO: PUT new profile values into DB 

    res.send("NOT IMPLEMENTED: Edit Profile POST");
};

exports.login_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'));
};

exports.login_post = function(req, res) {
    //res.send("NOT IMPLEMENTED: Login user POST");
    console.log("Request Body: " + req.body);

    let username, password;

    username = req.body.username;
    password = req.body.password;

    // TODO: Hash PW and GET password from DB
    

    res.redirect('/fuelquote/editProfile');
};

exports.register_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/register.html'));
};

exports.register_post = function(req, res) {
    let username = req.body.username.trim();
    let password = req.body.password.trim();

    // TODO: Save profile info to DB.
    res.redirect('/fuelquote/editProfile');
};
