/*--------------------------Requires--------------------------*/
const { Call_Count } = require("../../../models");
const { count } = require("console");

/*--------------------------Function--------------------------*/
const update_mkm_call_count = async (new_calls_count) => {
  //check if the call counter exists

  const call_count = await Call_Count.findOne({});

  //if not create one
  if (!call_count) {
    call_count = await Call_Count.create({ count: 0 });
  }

  for (let index = 0; index < new_calls_count; index++) {
    await call_count.count++;
  }

  await call_count.save();
  console.log("mkm api calls: " + call_count.count);
};

/*--------------------------Exports--------------------------*/
module.exports = { update_mkm_call_count };
