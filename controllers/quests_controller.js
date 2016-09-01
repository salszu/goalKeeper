var express = require('express');
var router = express.Router();
var quest = require('../models/quest.js');

router.get('/', function (req, res) {
	res.render('creation');
});

router.get('/create', function (req, res) {
	res.render('characterCreate');
} )

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