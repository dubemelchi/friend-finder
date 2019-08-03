// Load data
var friends = require("../data/friends");

// routing
module.exports = function(app) {
 // API GET requests
 app.get("/api/friends", function(req, res) {
  res.json(friends);
  console.log("User Data: " + JSON.stringify(friends));
 });

 app.post("/api/friends", function(req, res) {
  
 })
}