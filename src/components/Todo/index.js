import React, { Component } from 'react';
import { connect } from 'react-redux';

/// <div>Hello, world!</div>
///   => React.createElement('div', null, 'Hello, world!')

const Todo = React.createClass({
  getInitialState: function() {
    return {
      todo: [
       //{ task: 'my task', completed:false }
      ],
      pendingTask: ''
    };
  },
  handleTextChange: function(event) {
    // forceUpdate 
    // setState({ 
    //    ... this.state,
    //    pendingTask: e.target.value
    // })

    this.setState({
      ... this.state,
      pendingTask: event.target.value
    })
    console.log(event.target.value)
  },
  addTask: function() {
    const newTask = {task: this.state.pendingTask, completed: false}
    const newTodos = [ ...this.state.todo, newTask ];


    this.setState({
      todo: newTodos,
      pendingTask: ''
    })
  },
  render() {
    var todoList = this.state.todo.map(function (item, i) {
      return (
        <div key={i}>
          <span className='todoList'>{item.task}   </span>
          <span className='completed'>   {item.completed.toString()}</span>
        </div>
      );
    });

    return (
      <div>
        <h1>Todo</h1>
        <div>
          {todoList}
          <div>
            <input type='textbox' value={this.state.pendingTask} onChange={this.handleTextChange} />
            <button onClick={this.addTask}>add</button>
          </div>
        </div>
      </div>
    );
  }
});

        
export default Todo;