const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: { type: String, trim: true },
  price: { type: Number, trim: true },
  set: { type: String, trim: true },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
