/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Importing the filled heart icon

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
        margin: "10px",
      }}
      onClick={preventDefault}
    >
      {/* Row for icon, text, and link */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "8px",
            margin: "5px",
            padding: "4px",
            backgroundColor: "white",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FavoriteIcon />
        </div>

        {/* Container for text and link */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p style={{ margin: 0, paddingLeft: "8px" }}>
            Enjoy x factors and want to know more about Dark Patterns on social
            media?
          </p>
          <Link
            href="#"
            sx={{
              paddingLeft: "8px",
              mt: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline", // Shows underline on hover
              },
            }}
          >
            Go to our website
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
