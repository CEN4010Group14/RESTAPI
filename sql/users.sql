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

DELIMITER //
Create procedure addBook (
	IN bookid INT,
    IN userid INT)
		BEGIN
			INSERT INTO shopping_cart(bookid, userid) VALUES (bookid, userid);
		END //
	DELIMITER ;
    
DELIMITER //
Create procedure addUser (
	IN id INT,
    IN username VARCHAR(128),
    IN password VARCHAR(32),
    IN fname VARCHAR(64),
    IN lname VARCHAR(64),
    IN email VARCHAR(64),
    IN address VARCHAR(256))
		BEGIN
			INSERT INTO users(id, username, password, fname, lname, email, address) VALUES (id, username, password, fname, lname, email, address);
		END //
	DELIMITER ;
    
    
    
    
    