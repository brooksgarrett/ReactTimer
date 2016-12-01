var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">ReactTimer</li>
          <li><IndexLink to="/" activeClass="active-link">Timer</IndexLink></li>
          <li><Link to="/" activeClass="active-link">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created by <a href="https://github.com/brooksgarrett/">Brooks Garrett</a></li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Navigation;