DROP DATABASE IF EXISTS shopping_cart;
CREATE DATABASE shopping_cart;
USE shopping_cart;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(128) NOT NULL,
    password VARCHAR(32) NOT NULL, 
    fname VARCHAR(64),
    lname VARCHAR(64),
    email VARCHAR(64),
    address VARCHAR(256)
);
INSERT INTO users (username, password, fname, lname) VALUES ('alex123', 'alex987', 'Alex', 'John');

DROP TABLE IF EXISTS publishers;
CREATE TABLE publishers(
  id int NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE genres(
  id int NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT primary key,
	ISBN BIGINT Not NULL,
	`Name` varchar(256) NOT NULL,
	Price FLOAT(2) NOT NULL,
	Rating FLOAT(4) NOT NULL,
	GenreId INT NOT NULL,
    CONSTRAINT `fk_genre`
	FOREIGN KEY(GenreId) REFERENCES genres(id) ON DELETE CASCADE,
	PublisherId INT NOT NULL,
    CONSTRAINT `fk_pusblisher`
	FOREIGN KEY(PublisherId) REFERENCES publishers(id) ON DELETE CASCADE,
	`Year` Smallint NOT NULL,
	Copies Integer NOT NULL,
	`Description` VARCHAR(2048) NOT NULL
);

LOAD DATA INFILE 'books.csv'
INTO TABLE books
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
    bookid INT NOT NULL,
    userid INT NOT NULL,
    CONSTRAINT `fk_book`
    FOREIGN KEY(bookid) REFERENCES books(id) ON DELETE CASCADE,
    CONSTRAINT `fk_user`
    FOREIGN KEY(userid) REFERENCES users(id) ON DELETE CASCADE
);

DELIMITER //
Create procedure addBook (
	IN bookid INT,
    IN userid INT)
		BEGIN
			INSERT INTO cart(bookid, userid) VALUES (bookid, userid);
		END //
	DELIMITER ;

DROP PROCEDURE addUser;
DELIMITER //
Create procedure addUser (
    IN username VARCHAR(128),
    IN password VARCHAR(32),
    IN fname VARCHAR(64),
    IN lname VARCHAR(64),
    IN email VARCHAR(64),
    IN address VARCHAR(256))
		BEGIN
			INSERT INTO users(username, password, fname, lname, email, address) VALUES (username, password, fname, lname, email, address);
		END //
	DELIMITER ;



call addUser('mark123', 'mark123', 'Mark', 'Anthony', 'markant@gmail.com', ' ');
call addUser('kayla123', 'kayla123', 'Kayla', 'Lee', 'klee@gmail.com', ' ');
    
call addBook('1', '1');
call addBook('1', '2');
call addBook('1', '3');




    