/*--------------------------Imports--------------------------*/
const mongoose = require("mongoose");

/*--------------------------Inits--------------------------*/
const Schema = mongoose.Schema;

/*--------------------------Function--------------------------*/
const CardSchema = new Schema({
  name: { type: String, trim: true },
  price: [{ type: mongoose.Schema.Types.ObjectId, ref: "Price", trim: true }],
  price_foil: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Price", trim: true },
  ],
  set: { type: mongoose.Schema.Types.ObjectId, ref: "Set", trim: true },
  image: { type: String, trim: true },
  website: { type: String, trim: true },
  rarity: { type: String, trim: true },
  reprints: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reprint",
    trim: true,
  },
});

const Card = mongoose.model("Card", CardSchema);

/*--------------------------Exports--------------------------*/
module.exports = Card;
