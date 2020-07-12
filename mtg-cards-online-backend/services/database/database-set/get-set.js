/*--------------------------Requires--------------------------*/
const { Set } = require("../../../models");

/*--------------------------Function--------------------------*/
const get_set_db = async (setId) => {
  const set = await Set.findOne({ setId: setId });

  return set;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_set_db };
