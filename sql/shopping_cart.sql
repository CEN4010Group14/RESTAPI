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
DROP TABLE IF EXISTS genres;
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
    CONSTRAINT `fk_publlisher`
	FOREIGN KEY(PublisherId) REFERENCES publishers(id) ON DELETE CASCADE,
	`Year` Smallint NOT NULL,
	Copies Integer NOT NULL,
	`Description` VARCHAR(2048) NOT NULL
);

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

DROP PROCEDURE insertBook;
DELIMITER //
CREATE PROCEDURE insertBook (
	IN ISBN BIGINT,
    IN `Name` varchar(256),
	IN Price FLOAT(2),
	IN Rating FLOAT(4),
	IN GenreId INT,
    IN PublisherId INT,
	IN `Year` Smallint,
	IN Copies INT,
	IN `Description` VARCHAR(2048))
		BEGIN
			INSERT INTO genres(id) VALUES (GenreId);
            INSERT INTO publishers(id) VALUES(PublisherId);
			INSERT INTO books(ISBN, `Name`, Price, Rating, GenreId, PublisherId, `Year`, Copies, `Description`) VALUES (ISBN, `Name`, Price, Rating, GenreId, PublisherId, `Year`, Copies, `Description`);
		END //
DELIMITER ;

call insertBook('9780060001261', "Less Than Zero", '5.99', '1.36051', '1', '2', '2003', '147613', "Perry the Penguin needs 9 clams to buy an ice scooter -- but he's not very good at saving. As Perry earns, spends, finds, loses, and borrows clams, a simple line graph demonstrates the concept of negative numbers.");
call insertBook('9780880014977',"In The Garden Of The North American Martyrs (Stories)",'13.95','4.90143','3','3','2004','92849',"Among the characters you\'ll find in this collection of twelve stories by Tobias Wolff are a teenage boy who tells morbid lies about his home life, a timid professor who, in the first genuine outburst of her life, pours out her opinions in spite of a protesting audience, a prudish loner who gives an obnoxious hitchhiker a ride, and an elderly couple on a golden anniversary cruise who endure the offensive conviviality of the ship\'s social director.");
call insertBook('9780060511166',"Amelia Bedelia's Family Album",'4.99','3.29998','4','1','2003','909036',"Who could be more zany than Amelia Bedelia, everyone's favorite literal-minded housekeeper? Her family, of course! Meet the wacky members of this very original and entertaining family!");

call addUser('mark123', 'mark123', 'Mark', 'Anthony', 'markant@gmail.com', ' ');
call addUser('kayla123', 'kayla123', 'Kayla', 'Lee', 'klee@gmail.com', ' ');
    
call addBook('1', '1');
call addBook('1', '2');
call addBook('1', '3');
call addBook('2', '1');
call addBook('2', '2');
call addBook('3', '2');

SELECT * FROM books;
SELECT * FROM cart;
SELECT * FROM users;
SELECT bookid FROM cart WHERE userid = '2';

DELETE FROM cart WHERE userid = '1';
DELETE FROM cart WHERE userid = '2';
DELETE FROM cart WHERE userid = '3';