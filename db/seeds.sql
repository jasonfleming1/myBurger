/*Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.*/

/*Now you're going to run these SQL files.

Make sure you're in the db folder of your app.
Start MySQL command line tool and login: mysql -u root -p.

With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

Close out of the MySQL command line tool: exit.*/

/* === POPULATE THE BURGER TABLE === */

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (280) NOT NULL,
    devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Black Bean Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Stuffed Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Black Bean Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Stuffed Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheeseburger', FALSE);