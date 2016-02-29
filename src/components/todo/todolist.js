import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Todo = React.createClass({
  getInitialState() {
    return {
      items: [
        { text: 'Some TODO item', isChecked: false },
        { text: 'Some TODO item', isChecked: false },
        { text: 'Some TODO item', isChecked: true },
        { text: 'Some TODO item', isChecked: false }
      ]
    };
  },
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.items.map(i => {
          if(i.isChecked){
            return (<li className = "disabled">{i.text}</li>)
          } else {
            return (<li>{i.text}</li>);
          }
        })}
      </div>
    );
  }
});
