/*
#### Controller setup
1. Inside your `burger` directory, create a folder named `controllers`.
2. In `controllers`, create the `burgers_controller.js` file.
3. Inside the `burgers_controller.js` file, import the following:
   * Express
   * `burger.js`
*/

//==============REQUIRED==============

//express, router, and models

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//==============ROUTES==============

//GET route to select * burgers

router.get("/", function(req, res){
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
}); // ==> end GET route

//POST route for create burger

router.post("/api/burgers", function(req, res){
    burger.create([
        "burgerName", "isDevoured" //form inputs from index
    ], [
        req.body.burgerName, req.body.isDevoured 
    ], function(result) {
        res.json({ id: result.insertId} );
    });
}); // ==> end POST route

//PUT route for create burger

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    
    //console.log("condition", condition);

    burger.update({
        devoured: req.body.isDevoured 
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
}); // ==> end PUT route

//==============EXPORT==============

//export routes for server

module.exports = router;