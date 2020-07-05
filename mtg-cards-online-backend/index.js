var express = require("Express");
var app = express();

var router = require("./routes.js");

app.use("router", router);
