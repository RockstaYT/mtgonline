/*--------------------------Requires--------------------------*/
const { Set } = require("../../../models");

/*--------------------------Function--------------------------*/
const get_all_sets_db = async () => {
  const all_sets = await Set.find({});

  return all_sets;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_all_sets_db };
