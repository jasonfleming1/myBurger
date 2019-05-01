
//==============REQUIRED==============

var mysql = require("mysql");

//==============INITIATE THE CONNECTION==============

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "burger_db"
});

//==============CONNECTION CHECK==============

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("You are connected to burger_db as " + connection.threadId); 
});

//==============EXPORT CONNECTION==============

module.exports = connection;