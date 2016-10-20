'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var LecturerApi = require('../api/lecturerApi');
var ActionTypes = require('../constants/actionTypes')

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                lecturers: LecturerApi.getAllLecturers()
            }
        })
    }
};

module.exports = InitializeActions;