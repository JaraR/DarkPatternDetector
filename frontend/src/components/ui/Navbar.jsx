import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import logo from "../../assets/logo2.png";

export default function NavBar() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
    console.log(event.target.checked ? "Switch is on" : "Switch is off");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
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
          </IconButton>

          <Switch
            sx={{ ml: "auto" }}
            checked={isSwitchOn}
            onChange={handleSwitchChange}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
