use bookIBSN;
select * from genres
INTO OUTFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/iGenres.csv'
FIELDS OPTIONALLY ENCLOSED BY '"' 
TERMINATED BY ',' 
-- ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';