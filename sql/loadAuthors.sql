USE books;
SET FOREIGN_KEY_CHECKS = 0;
LOAD DATA INFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/authors.csv' 
INTO TABLE authors 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, FirstName, LastName, Biography, PublisherId);
SET FOREIGN_KEY_CHECKS = 1;

