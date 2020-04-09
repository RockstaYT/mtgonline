const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: { type: String, trim: true },
  price: [{ type: mongoose.Schema.Types.ObjectId, ref: "Price", trim: true }],
  set: { type: String, trim: true },
  isFoil: { type: Boolean, trim: true },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
