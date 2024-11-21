import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import amazon from "../assets/amazon.png";
import FOMO from "../assets/FOMO.png";
import mental from "../assets/mental.png";

export default function Types() {
  const cardsData = [
    {
      id: 1,
      title:
        "Unsubscribing from Amazon Prime: How 'Dark Patterns' Make It Difficult",
      image: amazon,
      description:
        "Amazon uses dark patterns like obstruction, confirmshaming, and misdirection to make unsubscribing from Prime difficult, pressuring users to stay subscribed.",
      borderColor: "#FE8096",
    },
    {
      id: 2,
      title:
        "How Social Media Use 'Engagement Notifications' to Keep You Hooked",
      image: FOMO,
      description:
        "Platforms like Facebook, Instagram, and Twitter use engagement notifications as a dark pattern to exploit FOMO, keeping users hooked and increasing screen time and addictive behaviors.",
      borderColor: "#485E8D",
    },
    {
      id: 3,
      title: "How Dark Patterns in Digital Design Are Impacting Mental Health",
      image: mental,
      description:
        "Over time, these patterns can contribute to increased stress, depression, and even addictive behavior, as users feel compelled to stay online, sacrificing their real-world connections and emotional well-being",
      borderColor: "#2169A3",
    },
    //     {
    //       id: 7,
    //       title: "Autoplay",
    //       image: autoplay,
    //       description:
    //         "Auto-play often falls under the category of manipulative patterns like Bait & Switch or Forced Continuity, which encourage further engagement without giving users an explicit choice to stop. This can extend user session times, making it difficult to disengage from the platform .",
    //       borderColor: "#FE7028",
    //     },
    //     {
    //       id: 4,
    //       title: "Promoted Ads",
    //       image: ads,
    //       description:
    //         "In X formerly known as twitter the posts that are promoted or sponsored have a very subtle AD written on the top right corner which when a user is skimming through might not register. According to recent reports almost every 3rd or 4th post in users timeline is an advert or a sponsored post that is unsoliceted information that is being force fed to the user. ",
    //       borderColor: "#c504ff",
    //     },
    //     {
    //       id: 5,
    //       title: "Engagement Notification",
    //       image: notification,
    //       description:
    //         "Engagement notifications are a type of dark pattern used on social media and websites to manipulate user behavior by creating urgency and prompting immediate interaction. They alert users to new likes, comments, or messages on their content, fostering feelings of social validation and fear of missing out ",
    //       borderColor: "#ceac00",
    //     },
    //     {
    //       id: 6,
    //       title: "Obstruction",
    //       image: obstruction,
    //       description:
    //         "Obstruction is a dark pattern that creates obstacles in users' path to make it difficult for them to complete the tasks that they desire. The more complicated and unclear the path it is, the more frustration it causes users, so that users are more likely to give up and choose the path that benefits the company rather than users themselves. The use case could be making it difficult to unsubscribe from membership.",
    //       borderColor: "#ffffff",
    //     },
  ];
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
      <Box
        sx={{
          maxWidth: 800,
          textAlign: "center",
          ml: 2,
          fontWeight: "bold",
          color: "white",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ marginBottom: "10px", fontSize: "45px" }}>
          X-Factors Blog
        </h1>

        <span>Raising Awareness About Dark Patterns in Digital Design</span>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          position: "relative",
        }}
      >
        {cardsData.map((card) => (
          <Card
            key={card.id}
            sx={{
              maxWidth: 345,
              margin: 1,
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)",

              border: `2px solid ${card.borderColor}`,
              borderRadius: "8px",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            <CardMedia
              sx={{
                height: 200,
                width: "100%",
                objectFit: "cover",

                transition: "transform 0.3s ease-in-out",
              }}
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                paddingBottom: 2,
              }}
            >
              <Button size="small" sx={{ fontWeight: "bold" }}>
                Share
              </Button>
              <Button size="small" sx={{ fontWeight: "bold" }}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}{" "}
      </Box>
    </Box>
  );
}
