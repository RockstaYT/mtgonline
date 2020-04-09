const MkmApiClient = require("mkm-api");
const { Set } = require("../../../models");
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");

const create_all_sets = async () => {
  const Client = new MkmApiClient(APP_TOKEN, APP_SECRET);

  Client.setAccessTokens(ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

  let responseJson; // NULL

  Client.get("/ws/v2.0/output.json/games/1/expansions")
    .then((res) => {
      responseJson = JSON.parse(res.response); // Assigned
      save_response(responseJson);
    })
    .catch((e) => {
      console.log(e);
    });
};

const save_response = async (responseJson) => {
  responseJson.expansion.forEach(async (element) => {
    var setId = parseInt(element.idExpansion);
    var name = element.enName;
    var releaseDate = element.releaseDate;
    var isReleased = element.isReleased === true;
    const set = await Set.findOne({ setId: setId });

    if (!set) {
      await Set.create({ name, setId, releaseDate, isReleased });
    } else {
      console.log("create-all-sets: set alredy exists");
    }
  });
};

module.exports = { create_all_sets };
