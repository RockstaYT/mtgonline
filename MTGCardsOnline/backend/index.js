const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// imports
const { MONGO_URI, SERVER_PORT } = require("./config");
const {
  get_all_cards,
  get_all_sets,
  get_all_cards_from_set,
  get_set_id,
} = require("./services");

// init express server
const app = express();

// init mongo
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, () => {
  console.log("conntected to mongoDB");
});
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// set up server
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

// POST
app.post("/card/create", async (req, res) => {
  try {
    await get_all_cards_from_set(req.body.setId);
    console.log(`Added/Updated all cards from set ${req.body.setId}`);
    res.send(`Added/Updated all cards from set ${req.body.setId}`);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

app.post("/set/create", async (req, res) => {
  try {
    await get_all_sets();
  } catch (error) {
    console.log(error);
    res.status(404).send("Set could not be created");
  }
});

//GET
app.get("/cards/getall", async (req, res) => {
  try {
    // db func
    let allCards = await get_all_cards();
    res.send(allCards);
  } catch (error) {
    console.log(error);
    res.status(404).send("no cards were found");
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at port: ${SERVER_PORT}`);
});
