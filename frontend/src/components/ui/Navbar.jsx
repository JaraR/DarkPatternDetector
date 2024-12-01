import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Switch from "@mui/material/Switch";
import logo from "../../assets/logo2.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  // const [isDetectionOn, setIsDetectionOn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // State to track anchor element for menu
  const openMenu = Boolean(anchorEl); // Boolean to check if the menu is open

  // const handleSwitchChange = (event) => {
  //   setIsDetectionOn(event.target.checked);
  // };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu when icon is clicked
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0, p: 0 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 40, height: 40, marginLeft: 0 }}
          />
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            fontWeight="bold"
            style={{ color: "#424242" }}
          >
            X-Factors
          </Typography>
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Switch checked={isDetectionOn} onChange={handleSwitchChange} /> */}

            {/* <Typography
              variant="body1"
              sx={{
                fontSize: "0.75rem",
                color: "#424242",
                lineHeight: 0.5,
                mb: 2,
              }}
            >
              Detection {isDetectionOn ? "On" : "Off"}
            </Typography> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
