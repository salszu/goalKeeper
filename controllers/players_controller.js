var express = require('express');
var router = express.Router();
var player = require('../models/player.js');

var pID;


router.post('/quests/charcreate', function (req, res) {
	
	player.create(['name', 'photo', 'password', 'email'], [req.body.name, req.body.photo, req.body.password, req.body.email], function () {
		console.log(req.body.name);
		res.redirect('/quests');
	});

	player.lastValue(function (data) {
		console.log(data);
		pID = data[0].playerID;
		console.log(pID);
	});

});

router.post('/quests/login/', function (req, res) {
	
	player.select(req.body.password, req.body.email, function (data) {
		console.log(data);
		pID = data[0].playerID;
		console.log(pID);
		res.redirect('/quests');
	})
})

router.get('/quests', function (req, res) {
	
	player.leftJoin(pID, function (data) {
		var hbsObject = { quests: data, playerID: pID };
		console.log(hbsObject);
		res.render('index', hbsObject);
	})
});

router.get('/leaders', function (req, res) {
	
	player.leaderBoard(function (data) {
		var hbsObject2 = { leaders: data };
		console.log(hbsObject2);
		res.render('leaders', hbsObject2);
	})
})

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