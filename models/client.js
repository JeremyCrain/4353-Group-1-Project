var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        family_name: {type: String, required: true, maxLength: 100},
        date_of_birth: {type: Date},
        address: {type: String, required: true},
        in_state: {type: Boolean, default: true},
        phone_number: {type: String, maxLength: 12},
        email_address: {stype: String},
        quote_history: [Number],
        updated: {type: Date, default: Date.now()},
        username: {type: String, minLength: 5, maxLength: 40, required: true},
        password: {type: String, minLength: 8, maxLength: 40, required: true}
    }
);

ClientSchema.virtual('name').get(function() {
    var fullname = '';
    if (this.first_name && this.family_name) {
      fullname = this.family_name + ', ' + this.first_name
    }
    if (!this.first_name || !this.family_name) {
      fullname = '';
    }
    return fullname;
});

ClientSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

module.exports = mongoose.model('Client', ClientSchema);