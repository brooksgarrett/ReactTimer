var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// App CSS
require('style!css!sass!ApplicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Timer} />
          <Route path="countdown" component={Countdown} />
        </Route>
    </Router>,
    document.getElementById('app')
);
