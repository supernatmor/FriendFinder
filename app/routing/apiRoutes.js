var friends = require(friends.js);//requires friends array from friends.js

app.get("/api/friends", function(req, res){
	return res.json(friends);//returns JSON object for display
});