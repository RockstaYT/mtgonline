const { create_card, get_all_cards, create_set } = require("./database");
const { get_all_sets, get_all_cards_from_set } = require("./cardmarket");

module.exports = {
  create_card,
  get_all_cards,
  create_set,
  get_all_sets,
  get_all_cards_from_set,
};
