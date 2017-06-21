import React from 'react';
import { Route, Link } from 'react-router-dom';

const PostDetail = ({ match, location }) => (
  <div>
    <h2>{match.params.title}</h2>
    <h3>{new URLSearchParams(location.search).get('keyword')}</h3>
  </div>
);

export default PostDetail;
