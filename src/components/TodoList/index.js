import React, { Component } from 'react';

// task, completed
// optional: timestamp, deadline

const TodoList = React.createClass({
  
  getInitialState: function() {
    return {
      todoList: [{
          task: 'I am a task',
          completed: false
        },
        {
          task: 'Task 2',
          completed: false
        }
      ]};
  },
  setComplete: function(index){
    console.log(index)
  }, 

  render(){
    return (
      <div>
        <div>Todo List Goes Here</div>
        {this.state.todoList.map(function(value, index){
          return (<li>{value.task}
                      <button onClick={() => this.setComplete(index)}>do something</button>
                  </li>)
        })
        }
      </div>
    );
  }
})

// [1, 2, 3].map(function(value) { 
    // return value 
// });
export default TodoList;