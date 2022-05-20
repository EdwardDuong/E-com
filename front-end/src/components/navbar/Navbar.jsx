import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="navLogo">Fucking DOT COM</span>
        <div className="navItems">
          <button className="navButton">REGISTER</button>
          <button className="navButton">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
