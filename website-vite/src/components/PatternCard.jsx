import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import chromeLogo from "../assets/chrome-logo.png";
import macPreview from "../assets/mac.png";
import autoplayHeader from "../assets/autoplay-header.png";
import adsHeader from "../assets/ads-header.png";
import tutorial from "../assets/tutorial.png";
import notificationHeader from "../assets/notification-header.png";

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
          gap: 0,
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
            width: "70%",

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
      {/* Mac Tutorial Image */}
      <Box>
        <h2
          style={{
            background: "linear-gradient(to right, #51acea, #9771f2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
            padding: "0 10px",
          }}
        >
          Tutorial and Walkthrough our chrome extension
        </h2>
        <img
          src={tutorial}
          alt="tutorial header"
          style={{
            width: "100%",
            maxWidth: 700,
            padding: 10,
          }}
        ></img>
        <h2
          style={{
            background: "linear-gradient(to right, #4EABEA, #0a6aaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
            padding: "0 10px",
          }}
        >
          What X-Factors Can Do for You
        </h2>
      </Box>
      {/* autoplay */}
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
            background: "linear-gradient(to right, #ff723a, #e05c2c)",
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

      {/* promoted ads */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            background: "linear-gradient(to right, #C38EE7, #6f6be5)",
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

      {/* notification */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src={notificationHeader}
          alt="notification header"
          style={{
            width: "100%",
            maxWidth: 700,
            padding: 10,
          }}
        ></img>
        <h2
          style={{
            background: "linear-gradient(to right, #FFA602, #d3732a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
            padding: "0 10px",
          }}
        >
          Engagement Notification <br />
          Detection
          <span
            style={{
              fontSize: "1.6rem",
              fontWeight: "bold",
            }}
          ></span>
        </h2>
      </Box>
    </Box>
  );
}
