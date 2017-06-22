import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import rootReducer from './share/RootReducer';
import ToDoReducer from './pages/ToDo/ToDoReducer';
// import reducer from './share/reducer';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

import ToDo from './pages/ToDo/ToDoActionType';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  // rootReducer,
  ToDoReducer,
  // reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.dispatch({
  type: ToDo.SET_STATE,
  payload: {
    todos: [
      { id: 1, text: 'React', status: 'completed', editing: false },
      { id: 2, text: 'Redux', status: 'active', editing: false },
      { id: 3, text: 'Immutable', status: 'active', editing: false },
      { id: 4, text: 'Redux-saga', status: 'active', editing: false },
      { id: 5, text: 'Mongoose', status: 'active', editing: false },
    ],
    filter: 'all',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
