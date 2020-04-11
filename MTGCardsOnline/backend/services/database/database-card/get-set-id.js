const { Set } = require("../../../models");

const get_set_id = async (name) => {
  const set = await Set.findOne({ name: name });

  if (set) {
    return set.Id;
  } else {
    console.log("find-set: set not found");
    return;
  }
};

module.exports = { get_set_id };
