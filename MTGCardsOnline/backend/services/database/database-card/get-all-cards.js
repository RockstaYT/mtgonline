const { Card } = require("../../../models");

const get_all_cards = async () => {
  try {
    // get card
    const cards = await Card.find({});
    console.log(cards);

    // check if card exists
    if (!cards) throw new Error("get_all_cards: no cards found");

    return cards;
  } catch (err) {
    console.error(`${err}`);
    throw Error(err);
  }
};

module.exports = { get_all_cards };
