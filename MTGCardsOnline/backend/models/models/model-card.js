const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  price: Number,
  set: {
    type: String,
    trim: true,
  },
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
