import React from "react";
import { Box, Link, Typography } from "@mui/material";

// Footer Component
function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgba(147, 112, 219, 0.8), rgba(70, 130, 180, 0.8))", // Light Purple to Light Blue gradient
        color: "#fff",
        textAlign: "center",
        padding: "20px 20px", // Reduced padding to make it half high
        marginTop: "auto",
        width: "100%",
        position: "relative",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for separation
      }}
    >
      {/* Copyright Section */}
      <Typography variant="body2" sx={{ marginBottom: 2, fontWeight: 500 }}>
        &copy; 2024 X-Factors. All Rights Reserved.
      </Typography>

      {/* Links Section */}
      <Box sx={{ mb: 2 }}>
        <Link
          href="/privacy-policy"
          sx={{
            color: "#fff",
            margin: "0 10px", // Reduced margin between links
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" }, // Underline on hover for links
          }}
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          sx={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Terms of Service
        </Link>
        <Link
          href="/contact"
          sx={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Contact
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
