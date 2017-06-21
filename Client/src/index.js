import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

import ToDoApp from './pages/ToDo/';
import Spinbox from './components/Spinbox/';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
