/** Inside your `burger` directory, create a folder named `models`.

  * In `models`, make a `burger.js` file.

    * Inside `burger.js`, import `orm.js` into `burger.js`
    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
    * Export at the end of the `burger.js` file.
*/

//==============REQUIRED==============

// require our mapper file
var orm = require("../config/orm.js");

//==============REQUIRED==============

// create function to interact with the database
var burger = {
    
    //getAll
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    }, // ==> end getAll

    // createBurger
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    }, // ==>end createBurger

    // updateBurger
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }, // ==> end updateBurger

    // readBurger
    read: function(condition, cb) {
        orm.read("burgers", condition, function(res) {
          cb(res);
        });
    } // ==> end readBurger
}; // ==> end var burger

//==============EXPORT==============

//export functions for the burger_controller
module.exports = burger;