import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import ToDoApp from './pages/ToDo/';
import Spinbox from './components/Spinbox/';

// ReactDOM.render(<Spinbox />, document.getElementById('root'));
// ReactDOM.render(<ToDoApp />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
