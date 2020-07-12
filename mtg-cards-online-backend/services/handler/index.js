/*--------------------------Imports--------------------------*/
const { create_all_sets } = require("./handler-functions/create-all-sets");
const { fetch_all_sets } = require("./handler-functions/fetch-all-sets");
const { fetch_card } = require("./handler-functions/fetch-card");
const {
  fetch_all_cards_from_set,
} = require("./handler-functions/fetch-all-cards-from-set");
const {
  create_card_from_set,
} = require("./handler-functions/create-cards-from-set");

/*--------------------------Exports--------------------------*/
module.exports = {
  create_all_sets,
  fetch_all_sets,
  create_card_from_set,
  fetch_all_cards_from_set,
  fetch_card,
};
