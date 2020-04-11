const MkmApiClient = require("mkm-api");
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");

const { create_set } = require("../../database");
const { mkm_api_call } = require("./mkm-api-call");

const get_all_sets = async () => {
  let responseJson = await mkm_api_call(
    "/ws/v2.0/output.json/games/1/expansions"
  );

  for (let element of responseJson.expansion) {
    const name = element.enName;
    const setId = parseInt(element.idExpansion);
    const releaseDate = element.releaseDate;
    const isReleased = element.isReleased === true;

    await create_set(name, setId, releaseDate, isReleased);
  }
};

module.exports = { get_all_sets };
