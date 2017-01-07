var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0, 
      timerStatus: 'paused'}
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus})
    switch (newStatus) {
      case 'started':
        this.startTimer();
        break;
      case 'stopped':
        this.stopTimer();
        break;
      case 'paused':
        this.pauseTimer();
        break;
    }
  },
  handleSetTimer: (count) => {
    this.setState({count: count});
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({count: newCount});
    }, 1000);
  },
  pauseTimer: function () {
    clearInterval(this.timer);
  },
  stopTimer: function () {
    clearInterval(this.timer);
    this.setState({count: 0, timerStatus: 'stopped'});
  },
  render: function (props) {
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
