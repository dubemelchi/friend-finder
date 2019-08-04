// try this again
// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tells node we are creating an express server
var app = express();

// seting an initial port
var PORT = process.env.PORT || 3000;

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

// route files 
require("./app/routing/html-routes")(app);
require("./app/routing/api-routes");

// listener
app.listen(PORT, function() {
 console.log("App listening on PORT: " + PORT);
})