const { Set } = require("../../../models");

const create_set = async ({ name, setId, releaseDate, isReleased }) => {
  const set = await Set.findOne({ setId: setId });
  console.log(name);

  if (!set) {
    await Set.create({ name, setId, releaseDate, isReleased });
  } else {
    console.log("create-set: set alredy exists");
  }
};

module.exports = { create_set };
