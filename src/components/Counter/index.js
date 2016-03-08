import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export const StatefulCounter = React.createClass({
  getInitialState(){
    return{
      value: 5
    }
  },
  onIncrementClicked: function(){
    this.setState({value:this.state.value+1})
  },
  onDecrementClicked: function(){
    this.setState({value:this.state.value-1})
  },
  render(){
    return(<Counter value={this.state.value} onIncrementClicked={this.onIncrementClicked} onDecrementClicked = {this.onDecrementClicked}/>)
  }
})

export const StatelessHelloWorld = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render() {
    return (<div>{this.props.text}</div>);
  }
});

export const StatefulHelloWorld = React.createClass({
  getInitialState() {
    return {
      text: "Hello, world with state!"
    };
  },
  render() {
    return (<StatelessHelloWorld text={this.state.text} />);
  }
})

export default connect(
  (state) => { return { value: state } }, // mapStateToProps
  (dispatch) => { // mapDispatchToProps
    return {
      onIncrementClicked: () => dispatch({ type: 'INCREMENT' }),
      onDecrementClicked: () => dispatch({ type: 'DECREMENT' })
    }
  }
)(Counter);

