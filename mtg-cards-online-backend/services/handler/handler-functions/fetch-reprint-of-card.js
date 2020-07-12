/*--------------------------Requires--------------------------*/
const { get_reprint_db } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_reprint_of_card = async (card) => {
  var reprintID = card.reprints;

  var reprint = await get_reprint_db(reprintID);

  return reprint;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_reprint_of_card };
