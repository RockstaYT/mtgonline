/*--------------------------Requires--------------------------*/
const { get_all_cards_from_set } = require("../../cardmarket");
const { create_card } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/ 32;
const create_card_from_set = async (setId) => {
  // fetch all cards from cm
  var response = get_all_cards_from_set();
  // proccess response
  // create card
  create_card(name, setId, price, price_foil, image, website, rarity);
};

/*--------------------------Exports--------------------------*/
module.exports = { create_card_from_set };
