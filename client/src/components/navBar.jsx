import React from "react";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/courses">
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About / Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        {props.isLoggedIn ? (
          <a className="nav-link" href="/profile">
            Profile
          </a>
        ) : (
          <a className="nav-link" href="/login">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
