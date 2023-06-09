use bookIBSN;
select * from publishers
INTO OUTFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/iPublishers.csv'
FIELDS OPTIONALLY ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';