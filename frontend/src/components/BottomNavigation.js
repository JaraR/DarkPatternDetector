/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";

const preventDefault = (event) => event.preventDefault();

export default function Links() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
      }}
      onClick={preventDefault}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FavoriteIcon sx={{ mr: 1 }} />
        <Link href="#">
          Enjoy x factors and want to know more about Dark Patterns on social
          media? Click here and go to our website!
        </Link>
      </Box>
    </Box>
  );
}
