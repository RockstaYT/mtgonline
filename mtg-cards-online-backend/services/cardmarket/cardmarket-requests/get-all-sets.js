/*--------------------------Requires--------------------------*/
const { mkm_api_call } = require("./mkm-api-call");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const get_all_sets = async () => {
  var responseJson = await mkm_api_call(
    "/ws/v2.0/output.json/games/1/expansions"
  );

  return responseJson.expansion;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_all_sets };
