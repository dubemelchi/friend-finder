// try this again
// dependencies
var express = require("express");
var bodyParser = re("body-parser");

// tells node we are creating an express server
var app = express();

// seting an initial port
var PORT = process.env.PORT || 9000;

// data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// route files 
require("./app/routing/html-routes")(app);
require("./app/routing/api-routes");

// listener
app.listen(PORT, function() {
 console.log("App listening on PORT: " + PORT);
})