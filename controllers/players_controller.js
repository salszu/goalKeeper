var express = require('express');
var router = express.Router();
var player = require('../models/player.js');

var pID;


router.post('/quests/charcreate', function (req, res) {
	player.create(['name', 'photo'], [req.body.name, req.body.photo], function () {
		console.log(req.body.name);
		res.redirect('/quests');
	});

	player.lastValue(function (data) {
		console.log(data);
		pID = data[0].playerID;
		console.log(pID);
	});

});

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
router.post('/quests/statsM1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'mind';
	var columnB = 'mind'; 
	var increment = 5;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})

})

router.post('/quests/statsM2/:playerID', function (req, res) {

	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'mind';
	var columnB = 'mind'; 
	var increment = 10;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})

})


router.post('/quests/statsM3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'mind';
	var columnB = 'mind'; 
	var increment = 20;
	
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
router.post('/quests/statsB1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'phys';
	var columnB = 'phys'; 
	var increment = 5;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

router.post('/quests/statsB2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'phys';
	var columnB = 'phys'; 
	var increment = 10;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

router.post('/quests/statsB3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'phys';
	var columnB = 'phys'; 
	var increment = 20;
	
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
router.post('/quests/statsS1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'soul';
	var columnB = 'soul'; 
	var increment = 5;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

router.post('/quests/statsS2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'soul';
	var columnB = 'soul'; 
	var increment = 10;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})

	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

router.post('/quests/statsS3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	
	var columnA = 'soul';
	var columnB = 'soul'; 
	var increment = 20;
	
	player.increment(columnA, columnB, increment, condition, function () {
		
		console.log("stat updated")
	})
	
	var columnExpA = 'exp';
	var columnExpB = 'exp';
	
	player.increment(columnExpA, columnExpB, increment, condition, function () {
		
		console.log("stat updated")
	})
})

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