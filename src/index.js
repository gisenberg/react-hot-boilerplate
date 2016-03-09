import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Todo from './components/Todo';

// const store = createStore(reducer);
// ReactDOM.render((
//   <Provider store={store}>
//     <Counter />
//   </Provider>), document.getElementById('root'));
  
  
ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
