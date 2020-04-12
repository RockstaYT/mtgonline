const { Call_Count } = require("../../../models");

const mkm_api_call_count = async () => {
  //check if the call counter exists
  let call_count = await Call_Count.findOne({});

  //if not create one
  if (!call_count) {
    call_count = await Call_Count.create({ count: 0 });
  }

  //push one into count
  await call_count.count++;
  await call_count.save();
  console.log(call_count.count);

  return call_count.count;
};

module.exports = { mkm_api_call_count };
