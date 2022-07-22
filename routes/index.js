var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const Client = require("../models/client.js");
const Quote = require("../models/fuelquote.js");
const path = require('path');

/*
// Validation rules
let loginValidation = [
    check('username').trim().escape(),
    check('password').isStrongPassword().trim().escape()
]

let registerValidation = [
    check('username').trim().escape(),
    check('password').isStrongPassword().trim().escape(),
    check('password2').isStrongPassword().trim().escape()
]

let quoteValidation = [
    check('deldate').isAfter(),
    check('galreq').isNumeric()
]

let profileValidation = [
    check('name').isAlpha(),
    check('city').isAlpha(),
    check('zip').isNumeric(),
    check('email').isEmail().normalizeEmail()
]
*/

// Require controller modules.
var client_controller = require('../controllers/clientController');
var quote_controller = require('../controllers/fuelquoteController');

// Client Routes
router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/register', client_controller.register_get);
router.post('/register', client_controller.register_post);

router.get('/login', client_controller.login_get);
router.post('/login', client_controller.login_post);

router.get('/editProfile/:user', client_controller.edit_profile_get);
router.post('/editProfile/:user', client_controller.edit_profile_post);

// Fuel Quote Routes

router.get('/quoteHistory/:user', quote_controller.quote_history_get);

router.get('/quote/:user', quote_controller.quote_info_get);
router.post('/quote/:user', quote_controller.quote_info_post);

// DB Routes

router.get('/profileInfo/:user', (req, res) => {
    Client.find({
        username: req.params.user,
    }).exec((err, result) => {
        if(err) {
            res.status(400).send('Error fetching user info');
        } else {
            res.json(result);
        }
    });
});

router.get('/quoteInfo/:id', (req, res) => {
    Quote.find({
        _id: req.params.id,
    }).exec((err, result) => {
        if(err) {
            res.status(400).send('Error fetching quote info');
        } else {
            res.json(result);
        }
    });
});

module.exports = router;