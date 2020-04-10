const { Card, Reprint, Price, Set } = require("../../../models");

const create_card = async (
  name,
  setId,
  price,
  price_foil,
  image,
  website,
  rarity
) => {
  //make Price Object
  var date = new Date().toJSON();
  let newPrice = await Price.create({ price, date });
  let newPriceFoil = await Price.create({ price: price_foil, date });

  //get set
  const set = await Set.findOne({
    setId: setId,
  });

  //check if card exists
  const card = await Card.findOne({
    name: name,
    set: set._id,
  });

  //if card exists push price and return
  if (card) {
    card.price.push(newPrice);
    card.price_foil.push(newPriceFoil);
    card.save();

    console.log(
      `create-card: Card ${name} from set ${set.name} alredy exists. Price updated.`
    );
    return;
  }

  //remove (...) from card name
  let nameTrimmed = name.substring(0, name.indexOf("("));
  nameTrimmed = nameTrimmed.replace(" ", "");

  //check if reprint exists
  let reprint = await Reprint.findOne({
    name: nameTrimmed,
  });

  //if reprint doesnt exist, create one
  if (!reprint) {
    reprint = await Reprint.create({ name: nameTrimmed });
  }

  //create new Card
  let newCard = await Card.create({
    name: name,
    price: newPrice,
    price_foil: newPriceFoil,
    set: set._id,
    image: image,
    website: website,
    rarity: rarity,
    reprints: reprint._id,
  });

  //push card into reprint
  reprint.reprints.push(newCard._id);
  reprint.save();

  //return created card
  return newCard;
};

module.exports = { create_card };
