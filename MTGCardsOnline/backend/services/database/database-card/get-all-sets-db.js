const { Set } = require("../../../models");

const get_all_sets_db = async () => {
  const sets = await Set.findOne({});

  return sets;
};

module.exports = { get_all_sets_db };
