use bookIBSN;
drop table IF EXISTS bookIBSN;
create table bookIBSN (
id INT NOT NULL AUTO_INCREMENT primary key,
ISBN BIGINT Not Null,
`Name` varchar(256) NOT NULL,
Price FLOAT(2) NOT NULL,
Rating FLOAT(4) NOT NULL,
GenreId INT NOT NULL,
	FOREIGN KEY(GenreId)
        REFERENCES genres(id)
		ON DELETE CASCADE,
PublisherId INT NOT NULL,
	FOREIGN KEY(PublisherId)
		REFERENCES publishers(id)
        ON DELETE CASCADE,
`Year` Smallint NOT NULL,
Copies Integer NOT NULL,
`Description` VARCHAR(2048) NOT NULL
);
-- ALTER TABLE bookIBSN ENGINE=MyISAM;
-- CREATE INDEX genre_index ON bookIBSN (GenreId ASC);

