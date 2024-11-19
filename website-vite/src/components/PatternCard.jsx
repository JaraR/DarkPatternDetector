import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import chromeLogo from "../assets/chrome-logo.png";
import macPreview from "../assets/mac-header.png";
import autoplayHeader from "../assets/autoplay-header.png";
import adsHeader from "../assets/ads-header.png";

export default function PatternCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              background: "linear-gradient(to right, #04ADF0, #FF7E74)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.5rem",
              padding: "0 10px",
            }}
          >
            Install Our Dark Pattern Detector <br />
            X-Factors
          </h2>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              color: "white",
              fontWeight: "bold",
              borderRadius: "999px",
              minWidth: "200px",
              minHeight: "60px",
              backgroundColor: "#04ADF0",
              "&:hover": {
                backgroundColor: "#0177CC",
              },
            }}
          >
            <img
              src={chromeLogo}
              alt="Chrome Logo"
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
              }}
            />
            Get X-Factors for Chrome
          </Button>
        </CardActions>
        {/* Mac Preview Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "120%",

            mt: 3,
          }}
        >
          <img
            src={macPreview}
            alt="mac preview"
            style={{
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
      <Box>
        <h2
          style={{
            background: "linear-gradient(to right, #04ADF0, #FF7E74)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
            padding: "0 10px",
          }}
        >
          What X-Factors Can do for You
        </h2>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src={autoplayHeader}
          alt="autoplay header"
          style={{
            width: "100%",
            maxWidth: 700,
            padding: 10,
          }}
        ></img>
        <h2
          style={{
            background: "linear-gradient(to right, #FFDAB9, #E6E6FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
            padding: "0 10px",
          }}
        >
          Autoplay Detection <br />
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
            }}
          >
            Pause autoplayed Videos <br />
            Watch on Your Own Terms
          </span>
        </h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            background: "linear-gradient(to right, #E6E6FA, #ADD8E6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
            padding: "0 10px",
          }}
        >
          Promoted Ads Detection <br />
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
            }}
          >
            Spot the Ads <br />
            Navigate with Control
          </span>
        </h2>
        <img
          src={adsHeader}
          alt="ads header"
          style={{
            width: "100%",
            maxWidth: 700,
            padding: 10,
          }}
        ></img>
      </Box>
    </Box>
  );
}
