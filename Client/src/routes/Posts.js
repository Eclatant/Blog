import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({ match, location }) => (
  <div>
    <h2>{match.params.title}</h2>
    <h3>{new URLSearchParams(location.search).get('keyword')}</h3>
  </div>
);

const Posts = () => (
  <div>
    <h1>Post</h1>
    <Link to="/posts/react">React</Link>
    <Link to="/posts/redux">Redux</Link>
    <Route path="/posts/:title" component={Post} />
  </div>
);

export default Posts;
