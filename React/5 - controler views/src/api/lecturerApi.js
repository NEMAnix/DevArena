'use strict';

//This file is mocking a web API by hitting hard coded data.
var lecturers = require('./lecturerData').lecturers;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(lecturer) {
	return lecturer.firstName.toLowerCase() + '-' + lecturer.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var LecturerApi = {
	getAllLecturers: function() {
		return _clone(lecturers); 
	},

	getLecturerById: function(id) {
		var lecturer = _.find(lecturers, {id: id});
		return _clone(lecturer);
	},
	
	saveLecturer: function(lecturer) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the lecturer to the DB via AJAX call...');
		
		if (lecturer.id) {
			var existingLecturerIndex = _.indexOf(lecturers, _.find(lecturers, {id: lecturer.id})); 
			lecturers.splice(existingLecturerIndex, 1, lecturer);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new lecturer in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			lecturer.id = _generateId(lecturer);
			lecturers.push(lecturer);
		}

		return _clone(lecturer);
	},

	deleteLecturer: function(id) {
		console.log('Pretend this just deleted the lecturer from the DB via an AJAX call...');
		_.remove(lecturers, { id: id});
	}
};

module.exports = LecturerApi;