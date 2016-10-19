'use strict';

var React = require('react');
var Router = require('react-router');
var LecturerForm = require('./lecturerForm');
var LecturerApi = require('../../api/lecturerApi');
var useRouterHistory = require('react-router/lib/useRouterHistory');
var createHashHistory = require("react-router/node_modules/history/lib/createHashHistory");
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var ManageLecturerPage = React.createClass({
	getInitialState: function() {
		return {
			lecturer: { id: '', firstName: '', lastName: '' }
		};
	},

	componentWillMount: function() {
		var lecturerId = this.props.params.id;

		if (lecturerId){
			this.setState({lecturer: LecturerApi.getLecturerById(lecturerId)});
		}
	},

	setLecturerState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.lecturer[field] = value;
		return this.setState({lecturer: this.state.lecturer});	
	},

	saveLecturer: function(event) {
		event.preventDefault();
		LecturerApi.saveLecturer(this.state.lecturer);
		appHistory.push('/lecturers')
	},

	render: function() {
		return(
			<LecturerForm 
				lecturer={this.state.lecturer} 
				onChange={this.setLecturerState} 
				onSave={this.saveLecturer} />
		);
	}
});

module.exports = ManageLecturerPage;