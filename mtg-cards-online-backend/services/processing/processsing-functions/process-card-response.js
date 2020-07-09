/*--------------------------Requires--------------------------*/
const { mkm_api_call } = require("../../cardmarket");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const process_card_response = async (card_element) => {
  //get the card id
  const cardId = card_element.idProduct;

  //setup url to get single card info and call mkm api to get single info
  const uri = `/ws/v2.0/output.json/products/${cardId}`;
  let response = await mkm_api_call(uri);

  //get all the relevant information about the card
  let cardName = await response.product.enName;
  let price = await response.product.priceGuide.TREND;
  let priceFoil = await response.product.priceGuide.TRENDFOIL;
  let image = await response.product.image;
  let website = (await "cardmarket.com") + response.product.website;
  let rarity = await response.product.rarity;
  let setId = await parseInt(response.product.expansion.idExpansion);

  var cardInfo = {
    cardName: cardName,
    price: price,
    priceFoil: priceFoil,
    image: image,
    website: website,
    rarity: rarity,
    setId: setId,
  };

  return cardInfo;
};

/*--------------------------Exports--------------------------*/
module.exports = { process_card_response };
