'use strict'

var React = require('react');

var AboutPage = React.createClass({
   render : function() {
       return(
           <div>
            <h1>About</h1>
            <div>
                Ova aplikacija koristi sljedece tehnologije:
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
           </div>
       );
   } 
});

module.exports = AboutPage;