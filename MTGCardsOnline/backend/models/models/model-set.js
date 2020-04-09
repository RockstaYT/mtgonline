const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetShema = new Schema({
  name: { type: String, trim: true },
  setId: { type: Number, trim: true },
  releaseDate: { type: Date, trim: true },
  isReleased: { type: Boolean, trim: true },
});

const Set = mongoose.model("Set", SetShema);

module.exports = Set;
