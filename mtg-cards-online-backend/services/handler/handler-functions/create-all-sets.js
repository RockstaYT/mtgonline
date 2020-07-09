/*--------------------------Requires--------------------------*/
const { get_all_sets } = require("../../cardmarket");

const { create_set } = require("../../database");

/*--------------------------Function--------------------------*/
const create_all_sets = async () => {
  //call cardmarket set fetcher
  var all_expansions = await get_all_sets();

  //call db set creater
  for (let expansion of all_expansions) {
    var name = expansion.enName;
    var setId = parseInt(expansion.idExpansion);
    var releaseDate = expansion.releaseDate;
    var isReleased = expansion.isReleased === true;

    await create_set(name, setId, releaseDate, isReleased);
  }
};

/*--------------------------Exports--------------------------*/
module.exports = { create_all_sets };
