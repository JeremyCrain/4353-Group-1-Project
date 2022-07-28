var express = require("express");
var router = express.Router();
const Client = require("../models/client.js");
const Quote = require("../models/fuelquote.js");
const User = require("../models/userCred.js");

// Require controller modules.
var client_controller = require("../controllers/clientController");
var quote_controller = require("../controllers/fuelquoteController");

// Client Routes
router.get("/", (req, res) => {
  res.redirect("/login");
});



router.get("/register", client_controller.register_get);
router.post("/register", client_controller.register_post);


router.get("/loginFail", client_controller.loginFail_get);
router.get("/login", client_controller.login_get);
router.post("/login", client_controller.login_post);

router.get("/editProfile/:user", client_controller.edit_profile_get);
router.post("/editProfile/:user",  client_controller.edit_profile_post);

// Fuel Quote Routes

router.get("/quoteHistory/:user", quote_controller.quote_history_get);

router.get("/quote/:user", quote_controller.quote_info_get);
router.post("/quote/:user", quote_controller.quote_info_post);

// DB Routes

router.get("/profileInfo/:user", (req, res) => {
  Client.find({
    username: req.params.user,
  })
    .exec((err, result) => {
      if (err) {
        res.status(400).send("Error fetching user info");
      } else {
        res.json(result);
      }
    });
});

router.get("/quoteInfo/:id", (req, res) => {
  Quote.find({
    _id: req.params.id,
  }).exec((err, result) => {
    if (err) {
      res.status(400).send("Error fetching quote info");
    } else {
      res.json(result);
    }
  });
});

router.get("/userInfo/:username", (req, res) => {
  User.find({
    username: req.params.username,
  })
  .select({ password: 0 })
  .exec((err, result) => {
    if (err) {
      res.status(400).send("Error fetching user info");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
