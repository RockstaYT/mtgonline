const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserShema = new Schema({
  username: { type: String, trim: true },
  hash: { type: String, trim: true },
  salt: { type: String, trim: true },
});

const Set = mongoose.model("User", UserShema);

module.exports = Set;
