const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Call_CountShema = new Schema({
  count: { type: Number, trim: true },
});

const Call_Count = mongoose.model("Call_Count", Call_CountShema);

module.exports = Call_Count;
