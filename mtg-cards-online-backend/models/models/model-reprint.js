/*--------------------------Imports--------------------------*/
const mongoose = require("mongoose");

/*--------------------------Inits--------------------------*/
const Schema = mongoose.Schema;

/*--------------------------Function--------------------------*/
const ReprintShema = new Schema({
  name: { type: String, trim: true },
  reprints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card", trim: true }],
});

const Reprint = mongoose.model("Reprint", ReprintShema);

/*--------------------------Exports--------------------------*/
module.exports = Reprint;
