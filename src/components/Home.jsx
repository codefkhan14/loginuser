import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <a href="/">Logo</a>
    </div>
    <ul className="navbar-links">
    <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link> 
        </li>
    </ul>
  </nav>
  );
};

export default Navbar;
