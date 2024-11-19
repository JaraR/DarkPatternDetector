import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import notification from "../assets/notification.png";
import autoplay from "../assets/autoplay.png";
import privacy from "../assets/privacy.png";
import obstruction from "../assets/obstruction.png";
import infinite from "../assets/infinite.png";
import emotion from "../assets/emotion.png";
import ads from "../assets/ads.png";
import { Link } from "react-router-dom";

export default function Types() {
  const cardsData = [
    {
      id: 1,
      title: "Emotional Steering",
      image: emotion,
      description:
        "The use of wording or visual elements to confer the information in either a highly positive or negative outlook. Influences the user’s emotional state to make an action against their interest.",
      borderColor: "#FE8096",
    },
    {
      id: 2,
      title: "Privacy Zuckering",
      image: privacy,
      description:
        "Refers to a term coined by critics to describe the practice where users are misled or manipulated into sharing more personal information than they intend to, often without being fully aware of the consequences.",
      borderColor: "#485E8D",
    },
    {
      id: 3,
      title: "Infinite Scrolling",
      image: infinite,
      description:
        "Where users are continuously presented with content without clear stopping points, leading to extended usage. Infinite scrolling could be categorized under patterns that exploit user habits by making it difficult for users to disengage from content consumption.",
      borderColor: "#2169A3",
    },
    {
      id: 7,
      title: "Autoplay",
      image: autoplay,
      description:
        "Auto-play often falls under the category of manipulative patterns like Bait & Switch or Forced Continuity, which encourage further engagement without giving users an explicit choice to stop. This can extend user session times, making it difficult to disengage from the platform .",
      borderColor: "#FE7028",
    },
    {
      id: 4,
      title: "Promoted Ads",
      image: ads,
      description:
        "In X formerly known as twitter the posts that are promoted or sponsored have a very subtle AD written on the top right corner which when a user is skimming through might not register. According to recent reports almost every 3rd or 4th post in users timeline is an advert or a sponsored post that is unsoliceted information that is being force fed to the user. ",
      borderColor: "#c504ff",
    },
    {
      id: 5,
      title: "Engagement Notification",
      image: notification,
      description:
        "Engagement notifications are a type of dark pattern used on social media and websites to manipulate user behavior by creating urgency and prompting immediate interaction. They alert users to new likes, comments, or messages on their content, fostering feelings of social validation and fear of missing out ",
      borderColor: "#ceac00",
    },
    {
      id: 6,
      title: "Obstruction",
      image: obstruction,
      description:
        "Obstruction is a dark pattern that creates obstacles in users' path to make it difficult for them to complete the tasks that they desire. The more complicated and unclear the path it is, the more frustration it causes users, so that users are more likely to give up and choose the path that benefits the company rather than users themselves. The use case could be making it difficult to unsubscribe from membership.",
      borderColor: "#ffffff",
    },
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
