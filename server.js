// DEPENDENCIES
// ==========================
var express = require("express");
var bodyParser = require("body-parser");

// SET UP EXPRESS APP
// ==========================
var app = express();
var PORT = process.env.PORT || 3000;

// SET UP MIDDLE WEAR
// ==========================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTER
// ==========================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// SERVER LISTENS
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
