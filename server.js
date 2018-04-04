// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// this sets up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});