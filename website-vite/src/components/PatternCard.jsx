import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import chromeLogo from "../assets/chrome-logo.png";

export default function PatternCards() {
  const cardsData = [
    {
      id: 1,
      title: "Emotional Steering",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "The use of wording or visual elements to confer the information in either a highly positive or negative outlook. Influences the user’s emotional state to make an action against their interest.",
      // backgroundColor: "#4F3A4B",
      // color: "#FC9494",
    },
    {
      id: 2,
      title: "Privacy Zuckering",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Refers to a term coined by critics to describe the practice where users are misled or manipulated into sharing more personal information than they intend to, often without being fully aware of the consequences.",
    },
    {
      id: 3,
      title: "Infinite Scrolling",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Where users are continuously presented with content without clear stopping points, leading to extended usage. Infinite scrolling could be categorized under patterns that exploit user habits by making it difficult for users to disengage from content consumption.",
    },
    {
      id: 4,
      title: "Promoted Ads",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "In X formerly known as twitter the posts that are promoted or sponsored have a very subtle AD written on the top right corner which when a user is skimming through might not register. According to recent reports almost every 3rd or 4th post in users timeline is an advert or a sponsored post that is unsoliceted information that is being force fed to the user.  Deliberate efforts have been made for the promoted content to look like organic content specially after the take over by musk. ",
    },
    {
      id: 5,
      title: "Engagement Notification",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Engagement notifications are a type of dark pattern used on social media and websites to manipulate user behavior by creating urgency and prompting immediate interaction. They alert users to new likes, comments, or messages on their content, fostering feelings of social validation and fear of missing out ",
    },
    {
      id: 6,
      title: "Obstruction",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Obstruction is a dark pattern that creates obstacles in users' path to make it difficult for them to complete the tasks that they desire. The more complicated and unclear the path it is, the more frustration it causes users, so that users are more likely to give up and choose the path that benefits the company rather than users themselves. The use case could be making it difficult to unsubscribe from membership.",
    },
    {
      id: 7,
      title: "Autoplay",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Auto-play often falls under the category of manipulative patterns like Bait & Switch or Forced Continuity, which encourage further engagement without giving users an explicit choice to stop. This can extend user session times, making it difficult to disengage from the platform .",
    },
    {
      id: 8,
      title: "Confirshaming",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Confirmshaming uses shame to drive users to act, such as when websites word an option to decline an email newsletter in a way that shames visitors into accepting",
    },
    {
      id: 9,
      title: "Dead End",
      image: "/static/images/cards/contemplative-reptile.jpg",
      description:
        "Auto-play often falls under the category of manipulative patterns like Bait & Switch or Forced Continuity, which encourage further engagement without giving users an explicit choice to stop. This can extend user session times, making it difficult to disengage from the platform .",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",
          width: "100%",
          lineHeight: 1.2,
        }}
      >
        <h1
          style={{
            background: "linear-gradient(to right, #4A90E2, #9013FE)", // Gradient colors
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem", // Adjust font size as needed
          }}
        >
          Dark patterns you can detect <br />
          on social media
        </h1>

        <h8>
          Protect your online privacy and rights by learning about dark patterns
          and unethical designs.
        </h8>
        <Button variant="contained" size="large" sx={{ mt: 5 }}>
          <img
            src={chromeLogo}
            alt="Chrome Logo"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          Get X-Factors for Chrome
        </Button>
      </CardActions>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          sx={{
            maxWidth: 345,
            margin: 1,
            // backgroundColor: card.backgroundColor,
            // color: card.color,
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              // color: "text.secondary", backup
            >
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
