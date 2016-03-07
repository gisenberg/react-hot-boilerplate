import React from 'react';
import ReactDOM from 'react-dom';
import ReduxCounter, { Counter, StateCounter, TodoItem, TodoList } from './components/Counter';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
	<div>
	    <ReduxCounter />
	    <StateCounter />
	    <h2>MY LIST</h2>
	   
	    <TodoList/>
	    
    </div>
  </Provider>), document.getElementById('root'));
