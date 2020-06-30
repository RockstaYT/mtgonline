const { User } = require("../../../models");

const check_username = async (username) => {
  const user = await User.findOne({ username: username });

  if (user) {
    return true;
  } else {
    return false;
  }
};

module.exports = { check_username };
