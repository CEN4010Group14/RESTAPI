LOAD DATA INFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/iPublishers.csv' 
INTO TABLE publishers
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, publisher);
