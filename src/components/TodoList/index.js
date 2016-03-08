import React, { Component } from 'react';

// task, completed
// optional: timestamp, deadline

const TodoList = React.createClass({
  
  getInitialState: function() {
    return {todoList: [{
      task: 'I am a task',
      completed: false
    }]};
  },
    
  render(){
    return (
      <div>
        <div>Todo List Goes Here</div>
        {this.state.todoList[0].task}
      </div>
    );
  }
})

export default TodoList;