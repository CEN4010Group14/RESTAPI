use bookIBSN;
select * from bookIBSN
INTO OUTFILE 'c:/ProgramData/MySQL/MySQL Server 8.0/Uploads/iBooks.csv'
FIELDS OPTIONALLY ENCLOSED BY '"' 
TERMINATED BY ',' 
ESCAPED BY '"' 
LINES TERMINATED BY '\r\n';