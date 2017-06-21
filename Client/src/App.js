import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './share/Header';

import About from './pages/About';
import PostList from './pages/Post/PostList';
import PostDetail from './pages/Post/PostDetail';
import PostCreate from './pages/Post/PostCreate';
import ToDo from './pages/ToDo/';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/post" component={PostList} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/post/create" component={PostCreate} />
        <Route path="/todo" component={ToDo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
