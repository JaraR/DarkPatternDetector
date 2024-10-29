import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
