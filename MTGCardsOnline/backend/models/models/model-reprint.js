const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReprintShema = new Schema({
  name: { type: String, trim: true },
  reprints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card", trim: true }],
});

const Reprint = mongoose.model("Reprint", ReprintShema);

module.exports = Reprint;
