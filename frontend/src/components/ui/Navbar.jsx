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

  React.useEffect(() => {
    // Load the switch state from storage when the component mounts
    chrome.storage.local.get(["isSwitchOn"], (result) => {
      const switchState =
        result.isSwitchOn !== undefined ? result.isSwitchOn : false;
      setIsSwitchOn(switchState);
      console.log("Loaded switch state from storage:", switchState);

      // Send message based on the initial switch state only if necessary
      if (switchState) {
        chrome.runtime.sendMessage({ type: "startAutoplay" });
      } else {
        chrome.runtime.sendMessage({ type: "stopAutoplay" });
      }
    });
  }, []);

  // Handle switch change
  const handleSwitchChange = (event) => {
    const checked = event.target.checked;
    setIsSwitchOn(checked);
    chrome.storage.local.set({ isSwitchOn: checked }); // Save the switch state
    console.log(checked ? "Switch is on" : "Switch is off");

    // Send message based on the new switch state
    chrome.runtime.sendMessage({
      type: checked ? "startAutoplay" : "stopAutoplay",
    });
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

          {/* Control the switch directly based on the state */}
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
