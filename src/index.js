import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxTodoApp, { StatefulHelloWorld } from './components/TodoApp';


// Todo Item
// task
// completed

// UI to add items

 const store = createStore(reducer);
 ReactDOM.render((
   <Provider store={store}>
     <ReduxTodoApp />
   </Provider>), document.getElementById('root'));
  
  

//ReactDOM.render((
//    <div>
//  <StatefulTodoApp/>
//        <StatefulHelloWorld/>
//    </div>
//), document.getElementById('root'));