import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import PostDetail from './PostDetail';

export default class PostList extends Component {
  render() {
    return (
      <div className="page-post post-list">
        <h1>Post</h1>
        <Link to="/posts/:id">title</Link>
        <Route path="/posts/:title" component={PostDetail} />
      </div>
      );
  }
}

