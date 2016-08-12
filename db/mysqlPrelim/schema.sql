SHOW DATABASES LIKE 'goaltracker_db';
# SHOW DATABASES;   
# SHOW SCHEMAS;

DROP DATABASE goaltracker_db;

SHOW DATABASES LIKE 'goaltracker_db';


CREATE DATABASE goaltracker_db;   
# or
# CREATE SCHEMA goaltracker_db;

SHOW DATABASES LIKE 'goaltracker_db';

USE goaltracker_db;


####################################################

USE goaltracker_db;

SHOW TABLES;

SHOW COLUMNS from User;
SHOW COLUMNS from Goal;

DROP TABLES User;	# delete table
DROP TABLES Goal;	# delete table

SHOW TABLES;

CREATE TABLE User
(
userID		varchar(20) , 
userPwd 		varchar(20)  DEFAULT null,  
userName                  varchar(20),
PRIMARY KEY (userID) 
);



CREATE TABLE Goal
(
userID		varchar(20), 
goalDesc		varchar(25),	
goalScore		varchar(1), 	
goalDone		boolean DEFAULT FALSE	
);


SHOW TABLES;

SHOW COLUMNS from User;
SHOW COLUMNS from Goal;
