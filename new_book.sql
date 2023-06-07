use books;
DELIMITER $$
drop procedure if exists add_book; 
CREATE PROCEDURE add_book (
in ISBN bigint,
in Name_ varchar(256),
in Price float(2),
in Rating float(4),
in GenreId int,
in Year_ smallint,
in Copies int,
in Description_ varchar(2048),
in FirstName varchar(128),
in LastName varchar(128)
)
BEGIN
select Year_;
set @PublisherId = (select PublisherId from authors a where a.FirstName = FirstName and a.LastName = LastName);
set @AuthorId = (select id from authors a where a.FirstName = FirstName and a.LastName = LastName);
SET FOREIGN_KEY_CHECKS = 0;
insert into books
(ISBN, `Name`, Price,Rating , GenreId, PublisherId, `Year`, Copies, `Description`)
values (
  ISBN, Name_, Price, Rating, GenreId, @PublisherId, Year_, Copies, Description_);
insert into book_authors (BookId, AuthorId) VALUES (LAST_INSERT_ID(), @AuthorId);
SET FOREIGN_KEY_CHECKS = 1;
END $$
