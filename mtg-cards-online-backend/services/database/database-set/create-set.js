/*--------------------------Requires--------------------------*/
const { Set } = require("../../../models");

/*--------------------------Function--------------------------*/
const create_set = async (name, setId, releaseDate, isReleased) => {
  const set = await Set.findOne({ setId: setId });

  if (!set) {
    await Set.create({ name, setId, releaseDate, isReleased });
    console.log(`create-set: set ${name} was created`);
  } else {
    console.log(`create-set: set ${name} alredy exists`);
  }
};

/*--------------------------Exports--------------------------*/
module.exports = { create_set };
