const MkmApiClient = require("mkm-api");
const { create_card } = require("../../database");
const { mkm_api_call } = require("./mkm-api-call");

const get_all_cards_from_set = async (setId) => {
  console.log(setId);
  //setup url to get singles and call mkm api to get singles
  const uri = `/ws/v2.0/output.json/expansions/${setId}/singles`;
  let responseJSON = await mkm_api_call(uri);

  //forech single in the set create card element
  for (let element of responseJSON.single) {
    await card_loop(element);
  }
};

const card_loop = async (element) => {
  //get the card id
  const cardId = element.idProduct;

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

  await create_card(cardName, setId, price, priceFoil, image, website, rarity);
};

module.exports = { get_all_cards_from_set };
