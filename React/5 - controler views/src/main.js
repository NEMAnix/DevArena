$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/homePage');
var LecturerPage = require('./components/lecturers/lecturerPage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');


var App = React.createClass({
    render: function(){
        var Child;
        
        switch(this.props.route) {
            case 'about': Child = AboutPage; break;
            case 'lecturers': Child = LecturerPage; break;
            default: Child = HomePage;
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
