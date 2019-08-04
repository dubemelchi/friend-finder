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
  var newFriend = req.body;
  var myScore = newFriend.scores;
  var score = [];
  for (var x = 0; x < myScore.length; x++) {
   score.push(parseInt(newFriend.scores[x]));

  };

  newFriend.scores = score;
  var total = 0;
  var issaMatch = 100;
  var index = -1;

  for(var j = 0; j < friends.length; j++) {
   total = 0;
   for(var i = 0; i < myScore.length; i++) {
    var dif = Math.abs(myScore[i] - friends[j].scores[i]);
    total += dif;
   };

   if(total < issaMatch) {
    issaMatch = total;
    index = j;
   };
  };

  friend.push(newFriend);
  console.log(newFriend);
  res.json(friends[index]);
  console.log(friends[index]);
 });
};