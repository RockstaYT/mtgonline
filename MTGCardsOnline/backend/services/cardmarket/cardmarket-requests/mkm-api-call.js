const MkmApiClient = require("mkm-api");
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");

const mkm_api_call = async (uri) => {
  const Client = new MkmApiClient(APP_TOKEN, APP_SECRET);
  Client.setAccessTokens(ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

  let responseJson;

  await Client.get(uri)
    .then((res) => {
      responseJson = JSON.parse(res.response);
    })
    .catch((e) => {
      console.log(e);
    });

  return responseJson;
};

module.exports = { mkm_api_call };
