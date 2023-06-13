use shopping_cart;
drop table IF EXISTS books;
create table books (
id INT NOT NULL AUTO_INCREMENT primary key,
ISBN BIGINT Not Null,
`Name` varchar(256) NOT NULL,
Price FLOAT(2) NOT NULL,
Rating FLOAT(4) NOT NULL,
GenreId INT NOT NULL,
PublisherId INT NOT NULL,
`Year` Smallint NOT NULL,
Copies Integer NOT NULL,
`Description` VARCHAR(2048) NOT NULL
);
-- ALTER TABLE bookIBSN ENGINE=MyISAM;
-- CREATE INDEX genre_index ON bookIBSN (GenreId ASC);

