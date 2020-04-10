const { get_all_sets } = require("./cardmarket-requests/get-all-sets");
const {
  get_all_cards_from_set,
} = require("./cardmarket-requests/get-all-cards-from-set");

module.exports = { get_all_sets, get_all_cards_from_set };
