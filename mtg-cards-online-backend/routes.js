/*--------------------------Requires--------------------------*/
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

/*--------------------------Inits--------------------------*/
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(cors());

/*--------------------------Imports--------------------------*/
const {
  create_all_sets,
  fetch_all_sets,
  create_card_from_set,
  fetch_all_cards_from_set,
  fetch_card,
  fetch_prices_of_card,
} = require("./services");

/*--------------------------POST--------------------------*/

/*Create all sets. If set exists, skip it.*/
router.post("/sets/create_all", async (req, res) => {
  try {
    console.log("Creating all sets.");
    create_all_sets();
    res.status(200).send("Created all sets succesfully.");
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all sets.*/
router.post("/sets/get_all", async (req, res) => {
  try {
    console.log("Fetsching all sets.");
    var set = await fetch_all_sets();
    res.status(200).send(set);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Create all cards from specific set. If card alredy exists, skip it.*/
router.post("/set/create_all_cards", async (req, res) => {
  try {
    var setID = await req.body.setId;
    await create_card_from_set(setID);
    res.status(200).send();
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all cards from specific set.*/
router.post("/set/get_cards", async (req, res) => {
  try {
    console.log("Called set/get_cards");

    var setID = req.body.setId;
    var cardsFromSet = await fetch_all_cards_from_set(setID);

    res.status(200).send(cardsFromSet);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get specific card from specific set.*/
router.post("/get_card", async (req, res) => {
  try {
    var cardID = req.body.cardID;

    var card = await fetch_card(cardID);
    res.status(200).send(card);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all prices from specific card*/
router.post("/card/get_prices", async (req, res) => {
  try {
    var card = req.body.card;
    var prices = await fetch_prices_of_card(card);

    res.status(200).send(prices);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all reprints from specific card*/
router.post("/card/get_reprint", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*--------------------------Exports--------------------------*/
module.exports = router;
