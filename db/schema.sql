/*In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:

id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.*/

/* === CREATE AND USE THE DATABASE === */

CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

/* === DROP TO CLEAR AND CREATE THE TABLE === */

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (280) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);