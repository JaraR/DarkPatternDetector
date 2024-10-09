import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.png";
import closeIcon from "../icons/close.png";
import Switch from "react-switch";

const Navbar = () => {
  // state for toggling the toggle button
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  //state for Close button
  const handleClose = () => {
    window.close();
  };
  // State for Detect now /Cancel button
  const [isDetecting, setIsDetecting] = useState(false);
  const handleDetectionToggle = () => {
    setIsDetecting(!isDetecting);
  };

  return (
    <nav className="navbar">
      <div className="logo-toggle-container">
        <div className="logo-title-container">
          <img src={logo} alt="Logo" className="logo-icon" />

          <div className="title-container">
            <h1>Dark Pattern Detector</h1>
            <button className="subtitle-button" onClick={handleDetectionToggle}>
              {isDetecting ? "Cancel Detection" : "Detect Now"}
            </button>
          </div>
        </div>
        <div className="toggle-close-container">
          <div>
            <Switch
              checked={isToggled}
              onChange={handleToggle}
              offColor="#ccc"
              onColor="#E6E0E9"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>
          <button className="close-button" onClick={handleClose}>
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
