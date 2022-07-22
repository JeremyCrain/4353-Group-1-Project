var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserCredSchema = new Schema({
  username: { type: String, minLength: 4, maxLength: 60, required: true },
  password: { type: String, minLength: 4, maxLength: 60, required: true },
});

module.exports = mongoose.model("User", UserCredSchema);
