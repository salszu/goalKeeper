SHOW TABLES;

SHOW COLUMNS from User;
SHOW COLUMNS from Goal;

SELECT * FROM User;
SELECT * FROM Goal;

DELETE FROM User;    # deletes all rows
DELETE FROM Goal;     #deletes all rows

SELECT * FROM User;
SELECT * FROM Goal;

INSERT INTO User
( userID, userPwd, userName) 
VALUES 
( 'abbey392', null, 'abbey' ),
( 'alice33', null, 'alice' ),
( 'arnold39', null, 'arnold' ),
( 'alfred101', null, 'alfred' ),
( 'albert74', null, 'albert' );


	
INSERT INTO Goal
(userID,goalDesc, goalScore) 
VALUES 
( 'alice33', 'wash the car', '1' ),
( 'alice33', 'wash the dishes', '3' ),
('alice33', 'wash the baby', '5' ),
( 'alice33', 'scrub the floor', '1' ),

( 'arnold39', 'count big toes', '1' ),

( 'alfred101', 'sail the ship', '1' ),
( 'alfred101', 'chop the tree', '3' ),
('alfred101', 'skip the rope', '5' ),
( 'alfred101', 'look at me', '1' );

SELECT * FROM User;
SELECT * FROM Goal;

SELECT User.userName, Goal.goalDesc, Goal.goalScore, Goal.goalDone
FROM Goal
LEFT JOIN User 
ON  Goal.userID=User.userID;