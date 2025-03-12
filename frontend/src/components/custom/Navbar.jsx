import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo2.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const openMenu = Boolean(anchorEl);


  // const handleMenuClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar variant="dense" sx={{ paddingLeft: "0px"}}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0, p: 0 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton> */}
          <a href="https://x-factors.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginLeft: 6 }}
            />
          </a>
          <a href="https://x-factors.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              fontWeight="bold"
              sx={{ 
                color: "#424242",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline"
                }
              }}
            >
              X-Factors
            </Typography>
          </a>
          {/* <Box
            sx={{
              ml: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}

          ></Box> */}

        </Toolbar>
      </AppBar>
      {/* <Menu
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
      </Menu> */}
    </Box>
  );
}
