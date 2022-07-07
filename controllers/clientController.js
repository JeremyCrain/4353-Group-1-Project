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
    console.log("Request Body: " + req.body);
    let username, password, password2;

    username = req.body.username;
    password = req.body.password;
    password2 = req.body.repassword;

    if(password == password2)
    {
        //res.send("NOT IMPLEMENTED: Register user POST");

        // TODO: Hash PW and POST into DB
        
        res.redirect('/fuelquote/editProfile');
    }
    else
    {
        console.log("Passwords do not match");
        alert("Passwords do not match");
        res.redirect('/fuelquote/register');
    }
};
