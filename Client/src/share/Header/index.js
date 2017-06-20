import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
    <NavLink to="/about" className="item" activeClassName="active">About</NavLink>
    <NavLink to="/posts" className="item" activeClassName="active">Posts</NavLink>
    <NavLink to="/todo" className="item" activeClassName="active">ToDo</NavLink>
    <NavLink to="/spinbox" className="item" activeClassName="active">Spinbox</NavLink>
  </div>
);

export default Header;
