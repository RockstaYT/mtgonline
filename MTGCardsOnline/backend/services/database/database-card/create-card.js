const { Card, Reprint } = require("../../../models");

const create_card = async ({ name, set, price }) => {
  try {
    // get card
    const card = await Card.findOne({
      name,
      set,
    });

    //get reprint
    const reprint = await Reprint.findOne({
      name,
    });

    // check if card exists
    if (card) throw new Error("create_card: Card already exists");

    // create card if !card
    let newCard = await Card.create({ name, set, price });

    console.log(reprint);

    //add card to reprints list
    if (reprint) {
      reprint.reprints.push(newCard._id);
      reprint.save();
    } else {
      //make new one
      await Reprint.create({ name, reprints: newCard._id });
    }

    return newCard;
  } catch (err) {
    console.error(`${err}`);
    throw Error(err);
  }
};

module.exports = { create_card };
