/*--------------------------Requires--------------------------*/
const { mkm_api_call } = require("./mkm-api-call");

/*--------------------------Function--------------------------*/
const get_all_cards_from_set = async (setId) => {
  var url = `/ws/v2.0/output.json/expansions/${setId}/singles`;

  var response = mkm_api_call(url);

  return response;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_all_cards_from_set };
