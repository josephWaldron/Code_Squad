import React from "react";
import "./NavBar.css";
import Cookies from "js-cookie";
const NavBar = () => {
  const isLoggedIn = Cookies.get("userId");
  return (
    <nav className="navbar1">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-nav1">
        <li className="item">
          <a className="linker" href="/">
            Home
          </a>
        </li>
        <li className="item">
          <a className="linker" href="/courses">
            Courses
          </a>
        </li>
        <li className="item">
          <a className="linker" href="/about">
            About / Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        {isLoggedIn ? (
          <a className="linker" href="/profile">
            Profile
          </a>
        ) : (
          <a className="linker" href="/login">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
