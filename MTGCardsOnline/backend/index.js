const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// imports
const { MONGO_URI, SERVER_PORT } = require("./config");
const { create_card, get_all_cards, create_all_sets } = require("./services");

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
app.post("/cards/create", async (req, res) => {
  try {
    // db func
    let newCard = await create_card(req.body);
    res.send(newCard);
  } catch (error) {
    console.log(error);
    res.status(404).send("Card could not be created");
  }
});

app.post("/set/create", async (req, res) => {
  try {
    await create_all_sets();
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
