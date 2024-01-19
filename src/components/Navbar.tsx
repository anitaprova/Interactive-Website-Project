import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() { 
  return (
  <>
    <nav className = "nav">
    <NavLink to="/">Home</NavLink>
    <ul>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/stats">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
    </nav>

    {/* The child route renders here using Outlet */}
    <div>
      <Outlet />
    </div>
  </>
  );
}