'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _lecturers = [];

var LecturerStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);  
    },
    
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);  
    },
    
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    
    getAllLecturers: function() {
        return _lecturers;
    },
    
    getLecturerById: function(id) {
        return _.find(_lecturers, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _lecturers = action.initialData.lecturers;
            LecturerStore.emitChange();
            break;
        case ActionTypes.CREATE_LECTURER:
            _lecturers.push(action.lecturer);
            LecturerStore.emitChange();
            break;
        case ActionTypes.UPDATE_LECTURER:
            var existingLecturer = _.find(_lecturers, {id: action.lecturer.id});
            var elIndex = _.indexOf(_lecturers, existingLecturer);
            _lecturers.splice(elIndex, 1, action.lecturer);
            LecturerStore.emitChange();
            break;
        case ActionTypes.DELETE_LECTURER:
            _.remove(_lecturers, function(lecturer){
                return action.id === lecturer.id;
            });
            LecturerStore.emitChange();
            break;
        default:
            //no op
    }
});

module.exports = LecturerStore;