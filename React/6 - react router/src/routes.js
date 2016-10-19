'use strict';

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

var routes = (
	<Route path="/" component={require('./components/app')}>
		<IndexRoute component={require('./components/homePage')} />
		<Route path="/lecturers" component={require('./components/lecturers/lecturerPage')} />
		<Route path="/about" component={require('./components/about/aboutPage')} />
	</Route>
);

module.exports = routes;