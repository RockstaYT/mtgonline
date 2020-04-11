const {
  create_card,
  get_all_cards,
  create_set,
  get_set_id,
} = require("./database");
const {
  get_all_sets,
  get_all_cards_from_set,
  mkm_api_call,
} = require("./cardmarket");

module.exports = {
  create_card,
  get_all_cards,
  create_set,
  get_all_sets,
  get_all_cards_from_set,
  get_set_id,
  mkm_api_call,
};
