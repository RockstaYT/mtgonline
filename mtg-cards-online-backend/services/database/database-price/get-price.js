/*--------------------------Requires--------------------------*/
const { Price } = require("../../../models");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const get_price_db = async (priceId) => {
  var price = Price.findOne({ _id: priceId });
  return price;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_price_db };
