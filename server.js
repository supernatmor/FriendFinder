// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//tells the server what to do when url is requested
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



//starts the server
app.listen(PORT);