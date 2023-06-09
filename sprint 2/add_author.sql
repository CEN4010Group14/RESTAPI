use books;
DELIMITER $$
drop procedure if exists add_author; 
CREATE PROCEDURE add_author (
in FirstName varchar(128),
in LastName varchar(128),
in Biography varchar (15991),
in PublisherId int
)
BEGIN
	declare id_ int;
	set id_ = (select max(id) from authors) + 1;
    insert into authors (id, FirstName, LastName, Biography, PublisherId) values (
		id_, FirstName, LastName, Biography,PublisherId
    );
    select id_;
END $$    
