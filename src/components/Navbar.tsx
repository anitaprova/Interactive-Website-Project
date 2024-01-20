import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() { 
  return (
  <>
    <nav>
    <ul>
      {/* home.png is smaller and has more padding around the icon */}
      <li>
        <NavLink to="/"><img src= "src\assets\icons\home.png" /></NavLink>
      </li>
      <li>
        <NavLink to="/characters"><img src= "src\assets\icons\characters.png" /></NavLink>
      </li>
      <li>
        <NavLink to="/stats"><img src= "src\assets\icons\stats.png" /></NavLink>
      </li>
      <li>
        <NavLink to="/contact"><img src= "src\assets\icons\contact.png" /></NavLink>
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