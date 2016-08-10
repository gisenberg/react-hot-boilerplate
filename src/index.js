import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
    <Counter />
  </Provider>), document.getElementById('root'));
