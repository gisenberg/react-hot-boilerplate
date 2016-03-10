import React, { Component } from 'react';
import { connect } from 'react-redux';

export const HelloWorld = React.createClass({
  render(){
    return (
      <div>{this.props.text}</div>
    )
  }
})

export const StatefulHelloWorld = React.createClass({
  getInitialState: function() {
    return {text: 'Hello World'};
  },
  render(){
    return (
        <HelloWorld text={this.state.text}/>
    )
  }
})

const StatefulTodoApp = React.createClass({
  getInitialState: function() {
    return {items: [{title: 'Todo Item', isComplete: false}]};
  },
  
  handleKeyUp: function(event){
    if(event.keyCode == 13){
      this.state.items.push({title:event.target.value, isComplete: false})
      this.forceUpdate();
    }
  },

  completeItem: function(obj) {
    obj.isComplete = !obj.isComplete;
    this.forceUpdate();
  },
  
  render() {
    return (
      <TodoApp items={this.state.items} onItemCompleted={this.completeItem} onKeyUp={this.handleKeyUp} />
    );
  }
});

const TodoApp = React.createClass({
  render(){
    var renderedItems = this.props.items.map((obj, i) => {
      return <li key={i}><input type="checkbox" checked={obj.isComplete} onChange={() => this.props.onItemCompleted(obj)}/> {obj.title}</li>;
    });

    return (
        <div>
          <h1>Todo App</h1>
          <input type="text" onKeyUp={this.props.onKeyUp}/>
          <ul>
            {renderedItems}
          </ul>
        </div>
    )
  }
});


export default connect(
    (state) => { return { items: state.items }  },
    (dispatch) => { // mapDispatchToProps
      return {
        onKeyUp: (event) => dispatch({ type: 'ADDNEWITEM', payload: event })
      }
    }
)(TodoApp);