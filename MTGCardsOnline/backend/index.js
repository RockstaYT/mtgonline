const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const genPassword = require("./lib/passwordUtils").genPassword;
const { User } = require("./models");
const MongoStore = require("connect-mongo")(session);

require("./config/passport");

// imports
const { MONGO_URI, SERVER_PORT } = require("./config");
const {
  get_all_sets,
  get_all_cards_from_set,
  get_all_sets_db,
  get_set_by_id,
  get_all_cards_from_set_db,
  get_prices_of_card,
} = require("./services");

// init express server
const app = express();

// init mongo
mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conntected to mongoDB");
  }
);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
    store: mongoose.session,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

// set up server
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// POST

//create all sets from MTG, conenction with cm / only call by hand/admin panel / return 204, no content
app.post("/sets/create", async (req, res) => {
  try {
    await get_all_sets();
    console.log("Created all sets succefully. Returning...");
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//create all cards from specific set, connection with cm / only call when a set is chosen, but no cards exist added (Home) / return 200, OK
app.post("/set/create_all_cards", async (req, res) => {
  try {
    await get_all_cards_from_set(req.body.setId);
    let set = await get_set_by_id(req.body.setId);
    console.log(
      "Created all cards and re-fetched set sucesfully. Returning..."
    );
    res.status(200).send(set);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//get all cards from specific set, connection with db / only call when a set is chosen (Home) / return 200, OK
app.post("/set/getcards", async (req, res) => {
  try {
    let set = await get_all_cards_from_set_db(req.body.setId);
    console.log("Got all cards. Returning...");
    res.status(200).send(set);
  } catch (error) {
    console.log(error);
    res.status(404).send("no sets were found.");
  }
});

//get all prices from specfic card, connection with db / only call when a card is chosen (Set) / return 200, OK
app.post("/card/getprices", async (req, res) => {
  try {
    let cardPrices = await get_prices_of_card(req.body.cardId);
    console.log("Got all Prices. Returning...");
    res.status(200).send(cardPrices);
  } catch (error) {
    console.log(error);
    res.status(404).send("no sets were found.");
  }
});

//login
app.post("/login", passport.authenticate("local"), async (req, res) => {
  try {
    res.send(req.isAuthenticated());
  } catch (error) {
    res.status(404).send(error);
  }
});

//register
app.post("/register", async (req, res) => {
  try {
    const saltHash = genPassword(req.body.pw);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    await User.findOne({ username: req.body.uname }).then((user) => {
      try {
        if (!user) {
          const newUser = new User({
            username: req.body.uname,
            hash: hash,
            salt: salt,
          });

          newUser.save().then((user) => {
            console.log(user);
          });

          res.status(200).send(newUser);
        } else {
          res.send("username is taken");
          return;
        }
      } catch (error) {
        res.send(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//logout
app.post("/logout", async (req, res) => {
  try {
    req.logout();
    res.send(req.isAuthenticated());
  } catch (error) {
    res.status(404).send(error);
  }
});

//GET

//get all sets, connection with db / only call when frontpage is loading (Home) / return 200, OK
app.get("/sets/getall", async (req, res) => {
  try {
    let allSets = await get_all_sets_db();
    console.log("Fetched all sets. Returning...");
    res.status(200).send(allSets);
  } catch (error) {
    console.log(error);
    res.status(404).send("no sets were found.");
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening at port: ${SERVER_PORT}`);
});
