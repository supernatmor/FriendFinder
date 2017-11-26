var friends = require(friends.js); //requires friends array from friends.js

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends); //returns JSON object for display
    });


    app.post("/api/friends", function(req, res){
    	friends.push(req.body);
    } )
}