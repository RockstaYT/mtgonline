const { Card, Price } = require("../../../models");

const get_prices_of_card = async (cardId) => {
  let card = await Card.findOne({ _id: cardId });

  const cardPrice = [];

  for (let price of card.price) {
    const priceObeject = await Price.findOne({ _id: price });

    cardPrice.push(priceObeject);
  }

  const cardPriceFoil = [];

  for (let pricefoil of card.price_foil) {
    const priceObeject = await Price.findOne({ _id: pricefoil });

    cardPriceFoil.push(priceObeject);
  }

  const cardPrices = [cardPrice, cardPriceFoil];

  return cardPrices;
};

module.exports = { get_prices_of_card };
