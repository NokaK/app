import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/Details">Details</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
