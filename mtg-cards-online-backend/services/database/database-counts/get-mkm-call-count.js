/*--------------------------Requires--------------------------*/
const { Call_Count } = require("../../../models");

/*--------------------------Function--------------------------*/
const get_mkm_api_call_count = async () => {
  //check if the call counter exists
  let call_count = await Call_Count.findOne({});

  //if not create one
  if (!call_count) {
    call_count = await Call_Count.create({ count: 0 });
  }

  return call_count.count;
};

/*--------------------------Exports--------------------------*/
module.exports = { get_mkm_api_call_count };
