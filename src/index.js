import React from 'react';
import ReactDOM from 'react-dom';
import ReduxCounter, { Counter, StatefulHelloWorld, StatelessHelloWorld, StatefulCounter } from './components/Counter';
import TodoList from './components/TodoList';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/// <div>Hello, world!</div> =>
///    React.createElement('div', null, 'Hello, world!')

const store = createStore(reducer);
 ReactDOM.render((
   <Provider store={store}>
	   <div>
	     <Counter value={5} onIncrementClicked={() => console.log('increment')} />
	     <ReduxCounter />
	     <TodoList />
	    </div>
   </Provider>), document.getElementById('root'));

// ReactDOM.render((
//     <TodoList />
//  ), document.getElementById('root'));
