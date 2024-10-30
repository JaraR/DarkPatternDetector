import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Types() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        mt: 2,
      }}
    >
      <Box sx={{ maxWidth: 800, textAlign: "left", ml: 2 }}>
        {" "}
        <Typography variant="h4" gutterBottom>
          X-Factors
        </Typography>
        <Typography variant="h6" gutterBottom>
          Project Brief
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body1" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h6" gutterBottom>
          Final Report
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          December 2024
        </Typography>
        <Typography variant="body1" gutterBottom>
          Report. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h6" gutterBottom>
          Our Github
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Button variant="contained">Github</Button>
        </Typography>
      </Box>
    </Box>
  );
}
