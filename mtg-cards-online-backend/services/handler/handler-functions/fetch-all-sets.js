/*--------------------------Requires--------------------------*/
const { get_all_sets_db } = require("../../database");

/*--------------------------Imports--------------------------*/

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const fetch_all_sets = async () => {
  const sets = await get_all_sets_db();

  return sets;
};

/*--------------------------Exports--------------------------*/
module.exports = { fetch_all_sets };
