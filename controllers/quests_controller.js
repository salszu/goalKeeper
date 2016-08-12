var express = require('express');
var router = express.Router();
var quest = require('../models/quest.js');

var userData = require('../data/user.js')


router.get('/', function (req, res) {
	res.redirect('/quests');
});

router.get('/user', function (req, res) {
		res.json(userData);
})

router.get('/quests', function (req, res) {
	
	quest.all(function (data) {
		var hbsObject = { quests: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/quests/create', function (req, res) {
	quest.create(['task', 'rating', 'qtype', 'done'], [req.body.task, req.body.rating, req.body.qtype, req.body.done], function () {
		res.redirect('/quests');
	});
});

router.put('/quests/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	quest.update({ done: req.body.done }, condition, function () {
		res.redirect('/quests');
	});
});

module.exports = router;