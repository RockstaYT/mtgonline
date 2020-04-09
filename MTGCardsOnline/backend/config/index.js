require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/test",
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  APP_TOKEN: process.env.APP_TOKEN,
  APP_SECRET: process.env.APP_SECRET,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};
