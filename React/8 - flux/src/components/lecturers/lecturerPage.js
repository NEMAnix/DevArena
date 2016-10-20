'use strict';

var React = require('react');
var Link = require('react-router').Link;
var LecturerActions = require('../../actions/lecturerActions');
var LecturerStore = require('../../stores/lecturerStore');
var LecturerList = require('./LecturerList');

var LecturerPage = React.createClass({
    getInitialState: function(){
        return {
            lecturers: LecturerStore.getAllLecturers()
        }
    },

    componentWillMount: function(){
        LecturerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        LecturerStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState ({ lecturers: LecturerStore.getAllLecturers() });
    },
    
    render: function(){        
        return (
            <div>
                <h1>Lecturers</h1>
                <Link to="/lecturer" className="btn btn-default">Add Lecturer</Link>
                <LecturerList lecturers={this.state.lecturers} />
            </div>
        );
    }
});

module.exports = LecturerPage;