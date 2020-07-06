/*--------------------------Requires--------------------------*/
const { Call_Count } = require("../../../models");

/*--------------------------Function--------------------------*/
const update_mkm_api_call_count = async (new_calls_count) => {
  //check if the call counter exists
  let call_count = await Call_Count.findOne({});

  //if not create one
  if (!call_count) {
    call_count = await Call_Count.create({ count: 0 });
  }

  //push one into count
  await call_count.count(call_count.count + new_calls_count);
  await call_count.save();
  console.log(call_count.count);
};

/*--------------------------Exports--------------------------*/
module.exports = { update_mkm_api_call_count };
