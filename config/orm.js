var connection = require('../config/connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// vals is an array of values that we want to save to cols
		// cols are the columns we want to insert the values into
	create: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		// objColVals would be the columns and values that you want to update
		// an example of objColVals would be {name: panther, sleepy: true}
	update: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	increment: function (table, columnA, columnB, increment, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + columnA + ' = ' + columnB + " + " + increment;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	lastValue: function(selectColumn, table, orderByColumn, cb) {
		var queryString = 'SELECT ' + selectColumn + ' FROM ' + table;
		queryString = queryString + ' ORDER BY ' + orderByColumn + ' DESC ';
		queryString = queryString + ' LIMIT 1';

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	leaderBoard: function (col1, col2, col3, col4, col5, table, orderByCol, cb) {
		var queryString = 'SELECT ' + col1 + ', ' + col2 + ', ' + col3 + ', ' + col4 + ', ' + col5;
		queryString = queryString + ' FROM ' + table;
		queryString = queryString + ' ORDER BY ' + orderByCol + ' DESC';
		queryString = queryString + ' LIMIT 5';

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		})
	},
	leftJoin: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol, playerID, callback) {
		var queryString = 'SELECT ' + whatToSelect + ' FROM ' + tableOne + ' as tOne';
		queryString = queryString + ' LEFT JOIN ' + tableTwo + ' as tTwo';
		queryString = queryString + ' ON tOne.' + onTableOneCol + ' = tTwo.' +	onTableTwoCol + ' WHERE tOne.' + onTableOneCol + ' = ' + playerID;

		console.log(queryString);
		console.time();
		connection.query(queryString, function (err, result) {
			console.timeEnd();
			callback(result);
		});
	}
};

module.exports = orm;