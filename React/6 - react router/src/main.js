$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./routes');
var useRouterHistory = require('react-router/lib/useRouterHistory');
var createHashHistory = require("react-router/node_modules/history/lib/createHashHistory");
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


ReactDOM.render((
    <Router history={appHistory}>
        {routes}
    </Router>
), document.getElementById('app'));
