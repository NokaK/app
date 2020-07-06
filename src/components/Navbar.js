import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <nav className="nav">
      <NavLink exact to="/" className="nav__link">
        Home
      </NavLink>
      <NavLink to="/favorites" className="nav__link">
        Favorites
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
