var Client = require('../models/client');
const path = require('path');

exports.edit_profile_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/profile.html'));
};

exports.edit_profile_put = function(req, res) {
    res.send("NOT IMPLEMENTED: Edit Profile PUT");
};

exports.login_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'));
};

exports.login_post = function(req, res) {
    //res.send("NOT IMPLEMENTED: Login user POST");

    

    res.redirect('/fuelquote/editProfile');
};

exports.register_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../public/register.html'));
};

exports.register_post = function(req, res) {
    if(req.body.password == req.body.repassword)
    {
        //res.send("NOT IMPLEMENTED: Register user POST");

        // TODO : Hash PW and PUT into DB
        
        res.redirect('/fuelquote/editProfile');
    }
    else
    {
        console.log("Passwords do not match");
        res.redirect('/fuelquote/register');
    }
};
