import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Krishna GS</h2>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>About</NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>Skills</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
