var express = require('express');
var router = express.Router();
var quest = require('../models/quest.js');
var currentUser = require('../data/currentUser.js')
var userData = require('../data/user.js')


router.get('/', function (req, res) {
	res.render('creation');
});

router.get('/user', function (req, res) {
		res.json(userData);
})

router.post('/api/newuser', function(req, res){

	clearUser();

	function clearUser() {
		userData = [];
	}

	var newUser = req.body;

	console.log(newUser);

	userData.push(newUser);
})

router.post('/quests/create', function (req, res) {
	quest.create(['task', 'rating', 'qtype', 'playerID', 'done'], [req.body.task, req.body.rating, req.body.qtype, req.body.playerID, req.body.done], function () {
		res.redirect('/quests');
	});
});

router.put('/quests/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	quest.update({ done: req.body.done, done: true }, condition, function () {
		res.redirect('/quests');
	});
});

module.exports = router;