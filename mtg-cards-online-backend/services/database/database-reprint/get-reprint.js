/*--------------------------Requires--------------------------*/
const { Reprint } = require("../../../models");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const get_reprint_db = async (reprintID) => {
  var reprint = Reprint.findOne({ _id: reprintID });

  return reprint;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_reprint_db };
