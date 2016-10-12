'use strict'

var React = require('react');

var Home = React.createClass({
   render : function() {
       return(
           <div className="jumbotron">
            <h1>DevArena Administracija</h1>
            <p>Administracija DevArena predavanja i predavaca koristeci React i Flux</p>
           </div>
       );
   } 
});

module.exports = Home;