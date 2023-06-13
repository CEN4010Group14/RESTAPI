USE shopping_cart;
SET FOREIGN_KEY_CHECKS = 0;
SET GLOBAL FOREIGN_KEY_CHECKS=0;
LOAD DATA INFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/iBooks.csv'
replace
INTO TABLE books
FIELDS TERMINATED BY ',' 
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS
(@dummy, ISBN, `Name`, Price,Rating , GenreId, PublisherId, `Year`, Copies, `Description`);
SET FOREIGN_KEY_CHECKS = 1;
SET GLOBAL FOREIGN_KEY_CHECKS=1;
