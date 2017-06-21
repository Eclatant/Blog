import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <NavLink exact to="/" className="item" activeClassName="active">About</NavLink>
    <NavLink to="/post" className="item" activeClassName="active">Posts</NavLink>
    <NavLink to="/todo" className="item" activeClassName="active">ToDo</NavLink>
  </div>
);

export default Header;
