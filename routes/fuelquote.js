var express = require('express');
var router = express.Router();

// Require controller modules.
var client_controller = require('../controllers/clientController');
var quote_controller = require('../controllers/fuelquoteController');

// Client Routes
router.get('/', client_controller.login_get);

router.get('/register', client_controller.register_get);
router.post('/register', client_controller.register_post);

router.get('/login', client_controller.login_get);
router.post('/login', client_controller.login_post);

router.get('/editProfile', client_controller.edit_profile_get);
router.post('/editProfile', client_controller.edit_profile_post);

// Fuel Quote Routes

router.get('/quoteHistory', quote_controller.quote_history_get);

router.get('/quote', quote_controller.quote_info_get);
router.post('/quote', quote_controller.quote_info_post);

module.exports = router;