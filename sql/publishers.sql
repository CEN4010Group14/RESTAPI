use books;
drop table publishers;
create table publishers (
	id INT NOT NULL primary key,
	publisher varchar(128) NOT NULL
)