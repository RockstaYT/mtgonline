const MkmApiClient = require("mkm-api");
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");

const { create_set } = require("../../database");

const get_all_sets = async () => {
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
    let name = element.enName;
    let setId = parseInt(element.idExpansion);
    let releaseDate = element.releaseDate;
    let isReleased = element.isReleased === true;

    create_set(name, setId, releaseDate, isReleased);
  });
};

module.exports = { get_all_sets };
