/*--------------------------Requires--------------------------*/
const { get_all_cards_from_set } = require("../../cardmarket");
const { create_card } = require("../../database");
const { process_card_response } = require("../../processing");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/ 32;
const create_card_from_set = async (setId) => {
  // fetch all cards from cm
  var response = await get_all_cards_from_set(setId);

  for (let element of response.single) {
    // proccess response
    var cardInfo = await process_card_response(element);
    // create card
    await create_card(
      cardInfo.cardName,
      cardInfo.setId,
      cardInfo.price,
      cardInfo.price_foil,
      cardInfo.image,
      cardInfo.website,
      cardInfo.rarity
    );
  }
};

/*--------------------------Exports--------------------------*/
module.exports = { create_card_from_set };
