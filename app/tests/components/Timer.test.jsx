var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect('Timer').toExist();
  });
  describe('handle start', () => {
    it('should set state to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });
    it('should pause countdown on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 3});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });
  it('should reset countdown on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 3});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
