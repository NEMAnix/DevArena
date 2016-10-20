'use strict';

var React = require('react');
var Link = require('react-router').Link;
var LecturerActions = require('../../actions/LecturerActions');

var LecturerList = React.createClass({
    propTypes: {
        lecturers: React.PropTypes.array.isRequired
    },

    deleteLecturer: function(id, event){
        event.preventDefault();
        LecturerActions.deleteLecturer(id);
    },

    render: function(){
        var createLecturerRow = function(lecturer){
            return(
                <tr key={lecturer.id}>
                    <td><a href="#" onClick={this.deleteLecturer.bind(this, lecturer.id)}>Delete</a></td>
                    <td><Link to={'/lecturer/' + lecturer.id}>{lecturer.id}</Link></td>
                    <td>{lecturer.firstName} {lecturer.lastName}</td>
                </tr>
            );
        };
        
        return (
            <div>            
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.lecturers.map(createLecturerRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = LecturerList;