var express = require('express');
var router = express.Router();
var player = require('../models/player.js');
var bcrypt = require('bcryptjs');

var pID;

router.post('/quests/charcreate', function (req, res) {

	var email = req.body.email;
	var password = req.body.password;

	var salt = bcrypt.genSaltSync(10);
	console.log(salt)

	var hash = bcrypt.hashSync(password, salt);
	
	player.create(['name', 'photo', 'password', 'email'], [req.body.name, req.body.photo, hash, email], function () {
		console.log(req.body.name);
		res.redirect('/quests');
	});

	player.select(hash, email, function (data) {
		console.log(data);
		pID = data[0].playerID;
		console.log(pID);
	});	
});

router.post('/quests/login', function (req, res) {

	var email = req.body.email;
	var userpass = req.body.password;

	console.log(email);
	console.log(userpass);
	
	player.authenticate(email, function (data) {
		console.log(data[0].password)

		var hash = data[0].password;

		bcrypt.compare(userpass, hash, function(err, result) {

			if(result === true) {
				console.log('password matches');
				player.select(hash, email, function (data) {
					console.log(data);
					pID = data[0].playerID;
					console.log(pID);
					res.redirect('/quests');
				});	
			}
			else {
				res.redirect('/');
			}
		})
	})
});

router.get('/quests', function (req, res) {
    
    player.leftJoin(pID, function (playerdata) {
        player.leaderBoard(function (leaderdata) {
            var hbsObject2 = { quests: playerdata, playerID: pID, leaders: leaderdata };
            console.log(hbsObject2);
            res.render('index', hbsObject2);
        })
    })
});

//mind upgrade routes
router.post('/quests/statsM/:playerID/:rating', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = req.params.rating;
	
	var columnA = 'mind';
	var columnB = 'mind'; 
	//var increment = 5;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})

})

//body upgrade routes
router.post('/quests/statsB/:playerID/:rating', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = req.params.rating;

	var columnA = 'phys';
	var columnB = 'phys'; 
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})


//soul upgrade routes
router.post('/quests/statsS/:playerID/:rating', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'soul';
	var columnB = 'soul'; 
	var increment = req.params.rating;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

//level up upgrade route
router.post('/quests/levelup/:playerID', function (req, res) {

	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'level';
	var columnB = 'level'; 
	var increment = 1;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

})


module.exports = router;