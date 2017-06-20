import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import ToDoApp from './components/ToDo/index';
import { List, Map } from 'immutable';

const todos = List.of(
  Map({ id: 1, text: 'React', status: 'active', editing: false }),
  Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
  Map({ id: 3, text: 'immutable', status: 'completed', editing: false }),
);

ReactDOM.render(<ToDoApp todos={todos} filter={'all'} />, document.getElementById('root'));
registerServiceWorker();
