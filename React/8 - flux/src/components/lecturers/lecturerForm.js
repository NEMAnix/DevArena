'use strict';

var React = require('react');

var LecturerForm = React.createClass({
	propTypes: {
		lecturer: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired
	},

	render: function() {
		return(
			<form>
				<h1>Manage Lecturer</h1>
				<label htmlFor="firstName">First Name</label>
				<input type="text"
					name="firstName"
					className="form-control"
					placeholder="First Name"
					ref="firstName"
					onChange={this.props.onChange}
					value={this.props.lecturer.firstName} />
				<br />

				<label htmlFor="lastName">Last Name</label>
				<input type="text"
					name="lastName"
					className="form-control"
					placeholder="Last Name"
					ref="lastName"
					onChange={this.props.onChange}
					value={this.props.lecturer.lastName} />
				<br />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = LecturerForm;