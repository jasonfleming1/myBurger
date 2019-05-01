////Your server.js file should require the basic npm packages we've used in class: express and path.

//============== SETUP OUR SERVER AND APPLICATION ==============

//required dependencies
var express = require("express");
//var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//enable a process
var PORT = process.env.PORT || 8080;

//initialize our app
var app = express();

//serve static content from the public dir
app.use(express.static("public"));

//parse application body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handelbars
app.engine("handlebars", exphbs( { defaultLayout: "main"}))
app.set("view engine", "handlebars");

//import routes and give the server access
//var routes = require("location of controller.js");
//app.use(routes);
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

//start the server so it can begin listening for requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});