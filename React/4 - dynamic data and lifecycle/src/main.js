$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var Lecturers = require('./components/lecturers/lecturerPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');


var App = React.createClass({
    render: function(){
        var Child;
        
        switch(this.props.route) {
            case 'about': Child = About; break;
            case 'lecturers': Child = Lecturers; break;
            default: Child = Home;
        }
        
        return(
            <div>
                <Header/>
                <Child/>
            </div>
        );
    } 
});

function render(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render, false);
render();
