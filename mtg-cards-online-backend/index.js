/*--------------------------Requires--------------------------*/
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("Express");
var mongoose = require("mongoose");
var router = require("./routes");

/*--------------------------Inits--------------------------*/
var app = express();

/*--------------------------Imports--------------------------*/
var { MONGO_URI, SERVER_PORT } = require("./config");

/*--------------------------Usage--------------------------*/
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

/*--------------------------Database--------------------------*/
mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conntected to mongoDB");
  }
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

/*--------------------------Server Port--------------------------*/

/*app.post("/", async (req, res) => {
  try {
    console.log("Done.");
  } catch (error) {}
});*/

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at port: ${SERVER_PORT}`);
});
