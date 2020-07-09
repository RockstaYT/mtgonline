/*--------------------------Requires--------------------------*/
const { get_all_cards_from_set } = require("../../cardmarket");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/ 32;
const create_card_from_set = async (setId) => {
  // fetch all cards from cm
  var response = get_all_cards_from_set();
  // proccess response
  // create card
};

/*--------------------------Exports--------------------------*/
module.exports = { create_card_from_set };
