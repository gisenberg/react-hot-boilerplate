import React from 'react';
import ReactDOM from 'react-dom';
import Counter, { HelloWorld } from './components/Counter';
import { Todo } from './components/todo/todolist';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
    <Todo />
  </Provider>), document.getElementById('root'));
