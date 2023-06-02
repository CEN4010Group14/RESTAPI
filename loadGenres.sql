USE books;
LOAD DATA INFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/genres.csv' 
INTO TABLE genres 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(genre)