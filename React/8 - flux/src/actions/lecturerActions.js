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
    },

    updateLecturer: function(lecturer) {
        var updatedLecturer = LecturerApi.saveLecturer(lecturer);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_LECTURER,
            lecturer: updatedLecturer
        });
    },

    deleteLecturer: function(id) {
    	LecturerApi.deleteLecturer(id);

    	Dispatcher.dispatch({
    		actionType: ActionTypes.DELETE_LECTURER,
    		id: id
    	});
    }
};

module.exports = LecturerActions;