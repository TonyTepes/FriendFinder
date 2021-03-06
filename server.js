var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("./app/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./app/routing/apiRoutes")(app);
require( "./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Friend Finder app is listening on PORT: " + PORT);
});