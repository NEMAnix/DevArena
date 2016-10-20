'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var LecturerApi = require('../api/lecturerApi');
var ActionTypes = require('../constants/actionTypes')

var LecturerActions = {
    createLecturer: function(lecturer) {
        var newLecturer = LecturerApi.saveLecturer(lecturer);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_LECTURER,
            lecturer: newLecturer
        });
    }
};

module.exports = LecturerActions;