const { create_card } = require("./database-card/create-card");
const { get_all_cards } = require("./database-card/get-all-cards");
const { create_set } = require("./database-card/create-set");
const { get_set_id } = require("./database-card/get-set-id");

module.exports = { create_card, get_all_cards, create_set, get_set_id };
