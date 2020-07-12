/*--------------------------Requires--------------------------*/
const { get_card_db } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_card = async (cardID) => {
  var card = await get_card_db(cardID);

  return card;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_card };
