INSERT INTO genre (id,name)
VALUES 
('1','fiction'),
('2','non-fiction')
;

INSERT INTO publisher (id,name)
VALUES 
('1','Amazon'),
('2','Google'),
('3','Microsoft'),
('4','Apple'),
('5','Facebook')
;

INSERT INTO books (id,isbn,name,price,genre_id,year,copies_sold,description,publisher_id,rating)
VALUES 
('1','0-9486-4176-2','How to find a girlfriend in 10 days','23.32','2','2007','4505','Descibes how to find a girl in 10 days.','3','4.56'),
('2','0-2651-4592-9','Stormwire','8.99','1','2020','20051','The adventures of Kalarin. Farmer to slave to soldier.','2','4.956'),
('3','0-1312-6208-4','Hand and Gretty','25.60','1','2035','8659','Two monster hunters set out. One is a hand the other is a little girl.','4','3.25'),
('4','0-7098-1398-8','The history of World War 3','50.25','2','2082','20054','The events of world war 3.','5','1.99'),
('5','0-3416-8044-3','Locked and Keyed','18.58','1','2036','1853','A girls locked car gets totaled because of a key monster living in her neighborhood.','1','5.00')
;

INSERT INTO authors (id,fname,lname,publisher_id)
VALUES 
('1','George','Restrepo','3'),
('2','John','Wick','2'),
('3','Allison','Bread','4'),
('4','Lauren','Monstar','5'),
('5','Amanda','Trylar','1')
;

INSERT INTO book_authors (book_id,author_id)
VALUES 
('1','1'),
('2','2'),
('3','3'),
('4','4'),
('5','5')
;

INSERT INTO books (id,isbn,name,price,genre_id,year,copies_sold,description,publisher_id,rating)
VALUES 
('6','0-2690-4592-9','Stormwire 2','9.99','1','2022','10548','The adventures of Kalarin. Farmer to slave to soldier.','2','2.52')
;

INSERT INTO book_authors (book_id,author_id)
VALUES 
('6','2')
;