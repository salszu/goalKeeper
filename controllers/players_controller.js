var express = require('express');
var router = express.Router();
var player = require('../models/player.js');
var currentUser = require('../data/currentUser.js')


//local storage access for node
//if (typeof localStorage === "undefined" || localStorage === null) {
//  var LocalStorage = require('node-localstorage').LocalStorage;
//  localStorage = new LocalStorage('./scratch');
//}

// assigns increment base values to local storage

//var objValA = JSON.parse(localStorage.yourObject || '{"mind": "0"}');
//localStorage.yourObject = JSON.stringify(objValA);
var objValA = {"mind": "0"};
var objValB = {"phys": "0"};
var objValC = {"soul": "0"};
var expVal = {"exp": "0"};
var levelVal = {"level": "1"};
var pID;
var updateID;

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

//persistent upgrade route - in progress - do not delete
//router.put('/quests/statsM1/:playerID', function (req, res) {
	
//	console.log("update route");	
//	var condition = 'playerID = ' + req.params.playerID;
	
//	var columnA = 'mind';
//	var columnB = 'mind'; 
//	var increment = '5';
	
//	player.increment(columnA, columnB, increment, condition, function () {
		
	//	console.log("stat updated")
//	})

//	player.update(expVal, condition, function() {

	//	res.redirect('/quests');
//	})
//})

//intellect upgrade routes
router.put('/quests/statsM1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValA, condition, function () {
		
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsM2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);

	player.update(objValA, condition, function () {
	
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})


router.put('/quests/statsM3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);

	
	player.update(objValA, condition, function () {
		
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

//body upgrade routes
router.put('/quests/statsB1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsB2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsB3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

//soul upgrade routes
router.put('/quests/statsS1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsS2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsS3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/levelup/:playerID', function (req, res) {

	console.log("update route");
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 1;
	levelVal.level = parseFloat(levelVal.level) + increment;
	console.log('condition', condition);

	player.update(levelVal, condition, function() {

		res.redirect('/quests');
	})


})


module.exports = router;