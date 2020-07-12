/*--------------------------Requires--------------------------*/
const { get_price_db, get_price_foil_db } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_prices_of_card = async (card) => {
  //get price id
  var priceID = card.price;
  //get foil price id
  var priceFoilID = card.price_foil;
  //get price
  var price = await get_price_db(priceID);
  //get foil price
  var priceFoil = await get_price_foil_db(priceFoilID);
  //return

  var prices = { price, priceFoil };
  return prices;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_prices_of_card };
