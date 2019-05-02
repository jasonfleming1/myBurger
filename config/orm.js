/*3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.*/

//==============DEPENDENCIES==============

var connection = require("../config/connection.js");

//==============HELPER FUNCTION FOR SQL SYNTAX==============

//cats app copy ==> greates an array of ? that represent passed values
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//MORE cats app copy ==> helper function to convert key/values to SQL
function objToSql(ob) {
  var arr = [];

  //loop through the keys and push key/value as a string
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // formats values with spaces to form proper key:'value' format
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      //for sql syntax now convert key:value to "key=value"
      arr.push(key + "=" + value);
    }
    // translate array of strings to a comma separate string
  }
  return arr.toString();
}
//==============SQL STATEMENT FUNCTIONS==============

//make an object containing all calls

var orm = {
  //selectAll()
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // ==> end selectAll

  //insertOne()
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }, // ==> end insertOne

  // updateOne()
  update: function(table, objColVals, condition, cb) {

    console.log("UPDATE");
    console.log(objColVals)
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    console.log(cb);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },//==> end updateOne()

}; // ==> end var orm

//==============EXPORT==============

//export orm object for the burger model
module.exports = orm;
