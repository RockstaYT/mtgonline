/*--------------------------Imports--------------------------*/
const mongoose = require("mongoose");

/*--------------------------Inits--------------------------*/
const Schema = mongoose.Schema;

/*--------------------------Function--------------------------*/
const PriceShema = new Schema({
  price: { type: Number, trim: true },
  date: { type: Date, trim: true },
});

const Price = mongoose.model("Price", PriceShema);

/*--------------------------Exports--------------------------*/
module.exports = Price;
