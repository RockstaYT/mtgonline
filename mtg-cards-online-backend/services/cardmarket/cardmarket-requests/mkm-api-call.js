/*--------------------------Requires--------------------------*/
const mkmApiClient = require("mkm-api");

/*--------------------------Imports--------------------------*/
const {
  APP_TOKEN,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = require("../../../config");
const { get_mkm_call_count, update_mkm_call_count } = require("../../database");

/*--------------------------Inits--------------------------*/

/*--------------------------Function--------------------------*/
const mkm_api_call = async (uri) => {
  //check if uri is null or empty
  var uri_is_empty = await isEmpty(uri);

  if (uri_is_empty) {
    throw new error("Given uri is empty or null.");
  }

  //get the call count
  var call_count = await get_mkm_call_count();

  if (call_count > 3500) {
    throw new error("Too many api calls");
  }

  //call mkm api
  var mkm_reponse = await mkm_call(uri);

  //if is multiple of x, 6 profile calls are made
  var is_mutiple = await isMultiple(call_count, 200);

  if (is_mutiple && call_count === 0) {
    await profile_call();
    await update_mkm_call_count(7);
  } else {
    await update_mkm_call_count(1);
  }

  return mkm_reponse;
};

const profile_call = async () => {
  for (let index = 0; index < 3; index++) {
    await mkm_call("/ws/v2.0/output.json/account");
    await mkm_call("/ws/v2.0/output.json/account/messages");
  }
};

const mkm_call = async (uri) => {
  //setup mkm client
  const Client = new mkmApiClient(APP_TOKEN, APP_SECRET);
  Client.setAccessTokens(ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

  //call api
  let responseJson = "";
  await Client.get(uri)
    .then((res) => {
      responseJson = JSON.parse(res.response);
    })
    .catch((e) => {
      console.log(e);
    });

  //return response
  return responseJson;
};

const isEmpty = async (str) => {
  return !str || 0 === str.length;
};

const isMultiple = async (count, base) => {
  var modulo = count % base;

  if (modulo == 0) {
    return true;
  } else {
    return false;
  }
};

/*--------------------------Exports--------------------------*/
module.exports = { mkm_api_call };
