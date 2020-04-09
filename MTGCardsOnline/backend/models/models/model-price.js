const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PriceShema = new Schema({
  price: { type: Number, trim: true },
  date: { type: Date, trim: true },
});

const Price = mongoose.model("Price", PriceShema);

module.exports = Price;
