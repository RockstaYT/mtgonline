/*--------------------------Requires--------------------------*/
const { get_all_sets } = require("../handler-functions/get_all_sets");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const create_all_sets = async () => {
  //call cardmarket set fetcher
  var all_expansions = get_all_sets();
  //call db set creater
};

/*--------------------------Exports--------------------------*/
module.exports = { mkm_api_call };
