var Client = require("../models/client.js");
var User = require("../models/userCred");
const LoginRegister = require("../public/javascripts/classes/login_register_class.js");
const path = require("path");



exports.edit_profile_get = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/profile.html"));
};

exports.edit_profile_post = async function (req, res) {
  console.log(req.body);

  let fname, lname, phone, address, email, state;

  let username = req.params.user;

  fname = req.body.fname;
  lname = req.body.lname;
  phone = req.body.phone;
  address = req.body.address;
  email = req.body.email;
  state = req.body.state;

  if (state == "texas") {
    state = true;
  } else {
    state = false;
  }

  let clientInfo = await Client.findOne({
    username: username,
  });

  if (!clientInfo) {
    clientInfo = new Client({
      first_name: fname,
      last_name: lname,
      phone_number: phone,
      address: address,
      email_address: email,
      in_state: state,
      username: username,
    });
  } else {
    clientInfo.first_name = fname;
    clientInfo.last_name = lname;
    clientInfo.phone_number = phone;
    clientInfo.address = address;
    clientInfo.email_address = email;
    clientInfo.in_state = state;
  }

  await clientInfo.save();

  //res.send("User info successfully updated.");
  res.sendFile(path.join(__dirname, "../public/profile.html"));
};

exports.login_get = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
};

exports.loginFail_get = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/loginFail.html"));
};

exports.login_post = async function (req, res) {
  let username, password, loginSuccessful;

  username = req.body.username;
  password = req.body.password;

  console.log(username + " " + password);

  let user = new LoginRegister();

  loginSuccessful = await user.loginUser(username, password);

  if (loginSuccessful == false) {
    res.redirect("/loginFail");
  } else {
    res.redirect("/editProfile/" + user.getUserName());
  }

  console.log("Success: ", loginSuccessful);

  res.end();
};

exports.register_get = function (req, res) {
  res.sendFile(path.join(__dirname, "../public/register.html"));
};

exports.register_post = async function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let password2 = req.body.password2;

  console.log(username, password, password2);

  let usernameCheck = await User.find({
    username: username,
  });

  console.log(usernameCheck);

  if (usernameCheck.length) {
    console.log("Username already in use. Please try another.");
    res.redirect("back");
  }

  if (password !== password2) {
    res.redirect("back");
  }

  let user = new LoginRegister();

  await user.registerUser(username, password);

  res.redirect("/login");
};