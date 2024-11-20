import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import logo from "../../assets/logo2.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NavBar() {
  const [isDetectionOn, setIsDetectionOn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const openMenu = Boolean(anchorEl);

  const handleSwitchChange = (event) => {
    setIsDetectionOn(event.target.checked);
    if (event.target.checked) {
      setOpenSnackbar(true);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
            <Switch checked={isDetectionOn} onChange={handleSwitchChange} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.75rem",
                color: "#424242",
                lineHeight: 0.5,
                mb: 2,
              }}
            >
              Detection {isDetectionOn ? "On" : "Off"}
            </Typography>
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

      {/* Snackbar that will show when the detection is turned on */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            padding: "8px 16px",
            fontSize: "0.875rem",
            height: "40px",

            borderRadius: "8px",
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: "70%", backgroundColor: "#ade0f4", color: "gray" }}
        >
          Don't forget to enable the dark pattern on Setting page:)
        </Alert>
      </Snackbar>
    </Box>
  );
}
