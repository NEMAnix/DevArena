'use strict';

var React = require('react');
var Link = require('react-router').Link;

var LecturerList = React.createClass({
    propTypes: {
        lecturers: React.PropTypes.array.isRequired
    },

    render: function(){
        var createLecturerRow = function(lecturer){
            return(
                <tr key={lecturer.id}>
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