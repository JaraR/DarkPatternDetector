import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

export default function BottomNavigation() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
        marginTop: 2,
      }}
    >
      <CardHeader
        avatar={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: "#0177CC" }} />
          </IconButton>
        }
        title={
          <div style={{ textAlign: "left" }}>
            {" "}
            Hi :) Do you enjoy our detection tool and want to learn more about
            Dark Patterns?
            <a
              href="https://x-factors.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "block",
                marginTop: "8px",
              }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{
                  fontWeight: "bold",
                  color: "#0177CC",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Go to Our Website
              </Typography>
            </a>
          </div>
        }
        sx={{ padding: "16px" }}
      />
    </Card>
  );
}
