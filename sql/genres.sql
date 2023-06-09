use bookIBSN;
drop table genres;
CREATE TABLE genres (
	id INT NOT NULL AUTO_INCREMENT primary key,
    genre VARCHAR(256) NOT NULL
);
