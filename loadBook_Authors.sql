USE books;
LOAD DATA INFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/book_authors.csv' 
INTO TABLE book_authors
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(BookId, AuthorId);