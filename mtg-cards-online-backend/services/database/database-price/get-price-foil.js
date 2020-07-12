/*--------------------------Requires--------------------------*/
const { Price } = require("../../../models");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const get_price_foil_db = async (priceFoilId) => {
  var priceFoil = Price.findOne({ _id: priceFoilId });
  return priceFoil;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_price_foil_db };
