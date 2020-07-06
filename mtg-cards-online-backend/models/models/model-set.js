/*--------------------------Imports--------------------------*/
const mongoose = require("mongoose");

/*--------------------------Inits--------------------------*/
const Schema = mongoose.Schema;

/*--------------------------Function--------------------------*/
const SetShema = new Schema({
  name: { type: String, trim: true },
  setId: { type: Number, trim: true },
  releaseDate: { type: Date, trim: true },
  isReleased: { type: Boolean, trim: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card", trim: true }],
  setEV: { type: Number, trim: true },
});

const Set = mongoose.model("Set", SetShema);

/*--------------------------Exports--------------------------*/
module.exports = Set;
