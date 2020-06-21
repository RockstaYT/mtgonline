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
  if (await card) {
    await card.price.push(newPrice);
    await card.price_foil.push(newPriceFoil);
    await card.save();

    console.log(
      `create-card: Card ${name} from set ${set.name} alredy exists. Price updated.`
    );
    return;
  }

  //remove (...) from card name
  let nameTrimmed;
  if (await name.includes("(")) {
    nameTrimmed = await name.substring(0, name.indexOf("("));
    nameTrimmed = await nameTrimmed.trim();
  } else {
    nameTrimmed = await name;
  }

  //check if reprint exists
  let reprint = await Reprint.findOne({
    name: nameTrimmed,
  });

  //if reprint doesnt exist, create one
  if ((await reprint) === null) {
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
  await reprint.reprints.push(newCard._id);
  await reprint.save();

  //push card into set
  set.cards.push(newCard._id);
  await reprint.save();

  console.log(`create-card: Card ${name} from set ${set.name} was created.`);
};

module.exports = { create_card };
