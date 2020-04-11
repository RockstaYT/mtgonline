const { get_all_sets } = require("./cardmarket-requests/get-all-sets");
const {
  get_all_cards_from_set,
} = require("./cardmarket-requests/get-all-cards-from-set");
const { mkm_api_call } = require("./cardmarket-requests/mkm-api-call");

module.exports = { get_all_sets, get_all_cards_from_set, mkm_api_call };
