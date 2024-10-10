import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.png";
import closeIcon from "../icons/close.png";
import Switch from "react-switch";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-toggle-container">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="logo-icon" />

          <div className="title-container">
            <h1>Dark Pattern Detector</h1>
            <button className="subtitle-button">Detect Now</button>{" "}
          </div>
        </div>
        <div className="toggle-close-container">
          <div>
            <Switch
              offColor="#ccc"
              onColor="#E6E0E9"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>
          <button className="close-button">
            <img src={closeIcon} alt="close" className="close-icon" />
          </button>
        </div>
      </div>

      <ul>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
