CREATE DATABASE quests_db2;
USE quests_db2;

CREATE TABLE quests
(
	id int NOT NULL AUTO_INCREMENT,
	task varchar(50) NOT NULL,
  rating varchar(30) NOT NULL,
  qtype varchar(30) NOT NULL,
	done BOOLEAN DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);