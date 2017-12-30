import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
  </div>
);

export default Header;
