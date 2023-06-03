use bookIBSN;
drop table authors;
create table authors (
 id INT NOT NULL primary key,
 FirstName varchar(128) NOT NULL,
 LastName varchar(128) NOT NULL,
 Biography varchar (15991) NOT NULL,
 PublisherId INT NOT NULL,
	FOREIGN KEY(PublisherId)
	REFERENCES publishers(id)
	ON DELETE CASCADE
);