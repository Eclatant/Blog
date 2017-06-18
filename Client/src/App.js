import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import NotFound from './routes/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
