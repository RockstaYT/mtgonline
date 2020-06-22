const { Set } = require("../../../models");

const get_set_by_id = async (id) => {
  const set = await Set.find({ setId: id });

  return set;
};

module.exports = { get_set_by_id };
