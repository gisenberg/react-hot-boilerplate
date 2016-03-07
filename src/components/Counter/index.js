import React, { Component } from 'react';
import { connect } from 'react-redux';

/// <HelloWorld text="foo" />

export const Counter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    onIncrementClicked: React.PropTypes.func.isRequired,
    onDecrementClicked: React.PropTypes.func.isRequired,
  },
  render() {
    return (
      <div> 
        <h1>Counter</h1>
        <p>{this.props.value}</p>
        <button onClick={this.props.onIncrementClicked}>+</button>
        <button onClick={this.props.onDecrementClicked}>-</button>
      </div>
    );
  }
});

export const StateCounter = React.createClass({
  getInitialState() {
    return {
      value: 5,
    };
  },
  increment(){
    const  oldVal = this.state.value;
    this.setState({
      value: oldVal +1
    })
  },
  decrement(){
      const  oldVal = this.state.value;
    this.setState({
      value: oldVal -1
    })
  },
  render(){
    return (
      <Counter 
        value={this.state.value}
        onIncrementClicked={this.increment} 
        onDecrementClicked={this.decrement} />
      );
  }
})

export const TodoItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    isDone: React.PropTypes.bool.isRequired
  },
  render(){
    return (
      <li>
      <span>{this.props.name}</span>
      <input type="checkbox" checked={this.props.isDone}/>
      </li>
      )
  }
})

export default connect(
  (state) => { return { value: state } }, // mapStateToProps
  (dispatch) => { 
    return {
      onIncrementClicked: () => dispatch({ type: 'INCREMENT' }),
      onDecrementClicked: () => dispatch({ type: 'DECREMENT' })
    }
  }
)(Counter);

