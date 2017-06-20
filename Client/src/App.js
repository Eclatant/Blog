import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './share/Header';

import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import ToDo from './pages/ToDo/';
import Spinbox from './components/Spinbox/';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/todo" component={ToDo} />
        <Route path="/spinbox" component={Spinbox} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
