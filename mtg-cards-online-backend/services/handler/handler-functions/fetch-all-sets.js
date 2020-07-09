/*--------------------------Requires--------------------------*/
const { get_all_sets } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_all_sets = async () => {
  const sets = get_all_sets();

  return sets;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_all_sets };
