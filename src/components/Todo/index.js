import React, { Component } from 'react';
import { connect } from 'react-redux';

const Todo = React.createClass({
  getInitialState: function() {
    return {todo: [{
      task: 'my task', 
      completed:false}]};
  },
  render() {
    var todoList = this.state.todo.map(function (item, i) {
      return (
        <div key={i}>
        <span className='todoList'>{item.task}</span>
        <span className='completed'>{item.completed.toString()}</span>
        </div>
      );
    });
    return (
      <div>
        <h1>Todo</h1>
        <div>
          
          {todoList}
          
        </div>
      </div>
    );
  }
});

        
export default Todo;