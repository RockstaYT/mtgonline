/*--------------------------Imports--------------------------*/
const { mkm_api_call } = require("./cardmarket-requests/mkm-api-call");
const { get_all_sets } = require("./cardmarket-requests/get-all-sets");
const {
  get_all_cards_from_set,
} = require("./cardmarket-requests/get-all-cards-from-set");

/*--------------------------Exports--------------------------*/
module.exports = { mkm_api_call, get_all_sets, get_all_cards_from_set };
