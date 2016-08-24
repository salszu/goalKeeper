var orm = require('../config/orm.js');

var player = {
	create: function (cols, vals, cb) {
		orm.create('players', cols, vals, function (res) {
			cb(res);
		});
	},
	select: function (condition, conditionB, cb) {
		orm.select('players', condition, conditionB, function (res) {
			cb(res);
		})
	},
	update: function (objColVals, condition, cb) {
		orm.update('players', objColVals, condition, function (res) {
			cb(res);
		})
	},
	increment: function (columnA, columnB, increment, condition, cb) {
		orm.increment('players', columnA, columnB, increment, condition, function (res) {
			cb(res);
		})
	},
	lastValue: function (cb) {
		orm.lastValue('playerID', 'players', 'playerID', function (res) {
			cb(res);
		})
	},
	leaderBoard: function (cb) {
		orm.leaderBoard('name', 'mind', 'phys', 'soul', 'exp', 'players', 'exp', function (res) {
			cb(res);
		})
	},
	leftJoin: function(playerID, callback) {
		orm.leftJoin('*', 'players', 'quests', 'playerID', 'playerID', playerID, function (res) {
			callback(res);
		})
	}
};

module.exports = player;