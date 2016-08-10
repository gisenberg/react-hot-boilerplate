import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// task list
// task has title, description
// methods to add, edit, delete a task.
// schedule task?
// arrayList of tasks
const myObject = {
  color: 'red',
  width: 1,
  height: 1
};

const TodoList = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          title: 'Get Milk',
          complete: true
        },
        {
          title: 'Watch Movie',
          complete: false
        }
      ]
    };
  },

  handleCompleteChanged: function(item) {
    const nextState = {
      todos: this.state.todos.map((todo) => {
        // If we're mapping the item that we clicked,
        // then set its complete to !complete
        // otherwise, return the todo
        if(item.title === todo.title)
        {
          return Object.assign({}, todo, { complete: !todo.complete })
        }
        return todo;
      })
    };

    this.setState(nextState)
  },

  handleAddTodoItem: function() {
    console.log(this.refs.addTodoItemTextbox.value)

    const newTodoItem = {
      title: this.refs.addTodoItemTextbox.value,
      complete: false
    }

    const newTodoItems = this.state.todos.concat(newTodoItem);
    this.setState({ todos: newTodoItems })
  },

  gettodolist: function () {
    return this.state.todos.map((item, i) => {
      return (
        <div key={i}>
          <input type="checkbox" checked={item.complete} onChange={() => this.handleCompleteChanged(item)} />
          <span>{item.title}</span>
        </div>);
    });
  },
  render: function () {
    return (
      <div>
        {this.gettodolist() }
        <input type="text" ref="addTodoItemTextbox" />
        <button onClick={this.handleAddTodoItem}>Add</button>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>);
  }
});

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);

// const store = createStore(reducer);
// ReactDOM.render((
//   <Provider store={store}>
//     <Counter />
//   </Provider>), document.getElementById('root'));
