require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/test",
  SERVER_PORT: process.env.SERVER_PORT || 3000,
};
