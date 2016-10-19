'use strict';

var React = require('react');
var LecturerApi = require('../../api/lecturerApi');

var Lecturers = React.createClass({
    getInitialState: function(){
        return {
            lecturers: []
        }
    },
    
    componentWillMount: function(){
        this.setState ({ lecturers: LecturerApi.getAllLecturers() })  
    },
    
    render: function(){
        var createLecturerRow = function(lecturer){
            return(
                <tr key={lecturer.id}>
                    <td><a href={"/#lecturers/" + lecturer.id}>{lecturer.id}</a></td>
                    <td>{lecturer.firstName} {lecturer.lastName}</td>
                </tr>
            );
        };
        
        return (
            <div>
                <h1>Lecturers</h1>
            
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.lecturers.map(createLecturerRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Lecturers;