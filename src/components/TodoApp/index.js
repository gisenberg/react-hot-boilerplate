import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [{title: 'Todo Item', isComplete: false}]};
  },
  
  handleKeyUp: function(event){
    console.log(event.keyCode);
    if(event.keyCode == 13){
      this.state.items.push({title:event.target.value, isComplete: false})
      this.setState(this.state.items);
    }
  },
  
  render() {
    var rennderedItems = this.state.items.map(function(obj, i){ 
      return <li key={i}><input type="checkbox" checked={obj.isComplete}/> {obj.title}</li>;
    });
    
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" onKeyUp={this.handleKeyUp}/>
        <ul>
          {rennderedItems}
        </ul>
      </div>
    );
  }
});

export default TodoApp;