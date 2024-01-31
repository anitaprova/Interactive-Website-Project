import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() { 
  return (
  <>
    <nav>
      <NavLink className="nav-link" to="/"><img src= "src\assets\icons\home.png" /></NavLink>
      <NavLink className="nav-link" to="/characters"><img src= "src\assets\icons\characters.png" /></NavLink>
      <NavLink className="nav-link" to="/stats"><img src= "src\assets\icons\stats.png" /></NavLink>
      <NavLink className="nav-link" to="/contact"><img src= "src\assets\icons\contact.png" /></NavLink>
      {/* home.png is smaller and has more padding around the icon */}
    </nav>

    {/* The child route renders here using Outlet */}
    <div>
      <Outlet />
    </div>
  </>
  );
}