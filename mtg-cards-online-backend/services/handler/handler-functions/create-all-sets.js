/*--------------------------Requires--------------------------*/
const { get_all_sets } = require("../../cardmarket");

const { create_set } = require("../../database");

/*--------------------------Function--------------------------*/
const create_all_sets = async () => {
  console.log("test");

  //call cardmarket set fetcher
  /*var all_expansions = get_all_sets();
  //call db set creater
  for (let expansion of all_expansions.expansion) {
    const name = expansion.enName;
    const setId = parseInt(expansion.idExpansion);
    const releaseDate = expansion.releaseDate;
    const isReleased = expansion.isReleased === true;

    await create_set(name, setId, releaseDate, isReleased);
  }*/
};

/*--------------------------Exports--------------------------*/
module.exports = { create_all_sets };
