CREATE DATABASE quests_db4;
USE quests_db4;

CREATE TABLE quests
(
    id int NOT NULL AUTO_INCREMENT,
    task varchar(50) NOT NULL,
    rating int NOT NULL,
    qtype varchar(30) NOT NULL,
    playerID int NOT NULL,
    done BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE players
(
    playerID int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    mind int DEFAULT 0,
    phys int DEFAULT 0,
    soul int DEFAULT 0,
    level int DEFAULT 1,
    exp int DEFAULT 0,
    password varchar(10) NOT NULL,
    email varchar(50) NOT NULL,
    photo varchar(200) NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (playerID)
);