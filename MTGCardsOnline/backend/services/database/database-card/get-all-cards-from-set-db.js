const { Card } = require("../../../models");
const { Set } = require("../../../models");
const { get_set_by_id } = require("./get-set-by-id");

const get_all_cards_from_set_db = async (id) => {
  const set = await Set.findOne({ setId: id });

  const cards = [];

  for (let cardItem of set.cards) {
    const card = await Card.findOne({ _id: cardItem });
    cards.push(card);
  }

  return cards;
};

module.exports = { get_all_cards_from_set_db };
