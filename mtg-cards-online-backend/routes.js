/*--------------------------Requires--------------------------*/
var express = require("express");

/*--------------------------Inits--------------------------*/
var router = express.Router();

/*--------------------------Imports--------------------------*/
const { create_all_sets, fetch_all_sets } = require("./services");

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
    var set = fetch_all_sets();
    res.status(200).send(set);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Create all cards from specific set. If card alredy exists, skip it.*/
router.post("/set/create_all_cards", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all cards from specific set.*/
router.post("/set/get_cards", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get specific card from specific set.*/
router.post("/set/get_card", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all prices from specific card*/
router.post("/card/get_prices", async (req, res) => {
  try {
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
