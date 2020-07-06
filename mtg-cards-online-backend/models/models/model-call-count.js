/*--------------------------Imports--------------------------*/
const mongoose = require("mongoose");

/*--------------------------Inits--------------------------*/
const Schema = mongoose.Schema;

/*--------------------------Function--------------------------*/
const Call_CountShema = new Schema({
  count: { type: Number, trim: true },
});

const Call_Count = mongoose.model("Call_Count", Call_CountShema);

/*--------------------------Exports--------------------------*/
module.exports = Call_Count;
