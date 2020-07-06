/*--------------------------Requires--------------------------*/
var express = require("express");

/*--------------------------Inits--------------------------*/
var router = express.Router();

/*--------------------------Imports--------------------------*/

/*--------------------------POST--------------------------*/

/*Create all sets. If set exists, skip it.*/
router.post("sets/create_all", async (req, res) => {
  try {
    console.log("Creating all sets.");
    //create all sets
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Create all cards from specific set. If card alredy exists, skip it.*/
router.post("set/create_all_cards", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all sets.*/
router.post("sets/get_all", async (req, res) => {
  try {
    console.log("Creating all sets.");
    //create all sets
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*Get all cards from specific set.*/
router.post("set/get_cards", async (req, res) => {
  try {
  } catch (error) {
    console.log("ERROR:", error);
    res.status(404).send(error);
  }
});

/*--------------------------Exports--------------------------*/
module.exports = router;
