var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientInformationSchema = new Schema({
  first_name: { type: String, maxLength: 100 },
  last_name: { type: String, maxLength: 100 },
  date_of_birth: { type: Date },
  address: { type: String },
  state: { type: String, default: true },
  phone_number: { type: String, maxLength: 12 },
  email_address: { type: String },
  quote_history: { type: [Schema.Types.ObjectId], ref: "Quote" },
  updated: { type: Date, default: Date.now() },
  username: {
    type: String,
    minLength: 4,
    maxLength: 40,
    required: true,
    unique: true,
  },
});

ClientInformationSchema.virtual("name").get(function () {
  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ", " + this.first_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

ClientInformationSchema.virtual("url").get(function () {
  return "/user/" + this._id;
});

module.exports = mongoose.model("Client", ClientInformationSchema);
