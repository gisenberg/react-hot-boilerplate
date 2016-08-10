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


const myTasks = [
  {
    title: 'Get Milk',
    complete: false
  },
  {
    title: 'Watch Movie',
    complete: false
  }
];

const TodoList = React.createClass({
  gettodolist: function () {

    return myTasks.map(function (item, i) {
      return (<div key={i}>
          <input type="checkbox" />
          <span>{item.title}</span>
      </div>);
    });
  },
  render: function () {
    return (<div>{this.gettodolist() }</div>);
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
