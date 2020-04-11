const MkmApiClient = require("mkm-api");
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");
const { create_card } = require("../../database");

const get_all_cards_from_set = async () => {
  const setId = "2582";
  const uri = `/ws/v2.0/output.json/expansions/${setId}/singles`;

  let responseJSON = await api_call(uri);

  for (let element of responseJSON.single) {
    const cardId = element.idProduct;

    const uri = `/ws/v2.0/output.json/products/${cardId}`;
    let response = await api_call(uri);

    let cardName = await response.product.enName;
    let price = await response.product.priceGuide.TREND;
    let priceFoil = await response.product.priceGuide.TRENDFOIL;
    let image = await response.product.image;
    let website = (await "cardmarket.com") + response.product.website;
    let rarity = await response.product.rarity;
    let reprints = await response.product.reprint;
    let setId = await parseInt(response.product.expansion.idExpansion);

    await create_card(
      cardName,
      setId,
      price,
      priceFoil,
      image,
      website,
      rarity,
      reprints
    );
  }

  /*responseJSON.single.forEach(async (element) => {
    const cardId = element.idProduct;

    const uri = `/ws/v2.0/output.json/products/${cardId}`;
    let response = await api_call(uri);

    let cardName = await response.product.enName;
    let price = await response.product.priceGuide.TREND;
    let priceFoil = await response.product.priceGuide.TRENDFOIL;
    let image = await response.product.image;
    let website = (await "cardmarket.com") + response.product.website;
    let rarity = await response.product.rarity;
    let reprints = await response.product.reprint;
    let setId = await parseInt(response.product.expansion.idExpansion);

    await create_card(
      cardName,
      setId,
      price,
      priceFoil,
      image,
      website,
      rarity,
      reprints
    );
  });*/
};

const api_call = async (uri) => {
  const Client = new MkmApiClient(APP_TOKEN, APP_SECRET);
  Client.setAccessTokens(ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

  let responseJson;

  await Client.get(uri)
    .then((res) => {
      responseJson = JSON.parse(res.response);
    })
    .catch((e) => {
      console.log(e);
    });

  return responseJson;
};

module.exports = { get_all_cards_from_set };
