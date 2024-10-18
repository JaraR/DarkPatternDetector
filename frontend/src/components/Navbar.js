import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../icons/logo.png";
// import closeIcon from "../icons/close.png";

import Switch from "@mui/material/Switch";

//try it out

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Navbar = () => {
  const [isDetectionOn, setIsDetectionOn] = useState(true);
  const handleToggle = (event) => {
    setIsDetectionOn(event.target.checked);
  };

  // const handleClose = () => {
  //   window.close();
  // };
  // State for Detect now /Cancel button
  // const [isDetecting, setIsDetecting] = useState(false);
  // const handleDetectionToggle = () => {
  //   setIsDetecting(!isDetecting);
  // };

  return (
    //try it out
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              X Factors
            </Typography>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    {...label}
                    checked={isDetectionOn}
                    onChange={handleToggle}
                  />
                }
                label={
                  <Typography sx={{ color: "black", fontSize: "0.75rem" }}>
                    {isDetectionOn ? "Detection On" : "Detection Off"}
                  </Typography>
                }
              />
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <nav className="navbar">
        {/* <div className="logo-toggle-container"> */}
        {/* <div className="logo-title-container"> */}
        {/* <img src={logo} alt="Logo" className="logo-icon" /> */}

        {/* <div className="title-container"> */}
        {/* <h1>X Factors</h1> */}
        {/* <div>
                <Switch
                  {...label}
                  checked={isDetectionOn}
                  onChange={handleToggle}
                />
                <p>{isDetectionOn ? "Detection On" : "Detection Off"}</p>
              </div> */}
        {/* <button className="subtitle-button" onClick={handleDetectionToggle}>
              {isDetecting ? "Cancel Detection" : "Detect Now"}
            </button> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="toggle-close-container">
            <button className="close-button" onClick={handleClose}>
              <img src={closeIcon} alt="close" className="close-icon" />
            </button>
          </div> */}
        {/* </div> */}

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
    </div>
  );
};

export default Navbar;
