/*--------------------------Requires--------------------------*/
const { get_set_db, get_card_db } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_all_cards_from_set = async (setId) => {
  var set = await get_set_db(setId);

  var all_cards_id = set.cards;

  var cards = [];

  for (let cardId of all_cards_id) {
    var card = await get_card_db(cardId);
    cards.push(card);
  }

  return cards;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_all_cards_from_set };
