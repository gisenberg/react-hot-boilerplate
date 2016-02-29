import React, { Component } from 'react';
import { connect } from 'react-redux';

export const HelloWorld = React.createClass({
  propType: {
    text: React.PropTypes.string.isRequired,
  },
  render(){
    return(
      <div>
        {this.props.text}
      </div>
    )
  }
})

const Counter = React.createClass({
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

export default connect(
  (state) => { return { value: state } },
  (dispatch) => {
    return {
      onIncrementClicked: () => dispatch({ type: 'INCREMENT' }),
      onDecrementClicked: () => dispatch({ type: 'DECREMENT' })
    }
  }
)(Counter);
