var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
  requester: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  date_requested: { type: Date, default: Date.now() },
  profit_margin: { type: Number },
  amount_requested: { type: Number, required: true },
  fuel_rate: { type: Number, required: true },
  in_state: { type: Boolean, required: true },
  delivery_address: { type: String, required: true },
  total_cost: { type: Number, required: true },
});

// Virtual for quote's URL
QuoteSchema.virtual("url").get(function () {
  return "/quote/" + this._id;
});

//Export model
module.exports = mongoose.model("FuelQuote", QuoteSchema);
