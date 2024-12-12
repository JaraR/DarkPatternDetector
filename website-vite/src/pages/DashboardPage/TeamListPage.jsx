import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import gitIcon from "../../assets/git-icon.png";

export default function TeamList() {
  const asdMembers = [
    {
      name: "Jara Rodriguez",
      avatar: "/static/images/avatar/1.jpg",
    },
    {
      name: "Ling Jiang",
      avatar: "/static/images/avatar/2.jpg",
    },
    {
      name: "Jiaxin Liu",
      avatar: "/static/images/avatar/3.jpg",
    },
  ];

  const dsMembers = [
    {
      name: "Ashus Zahid",
      avatar: "/static/images/avatar/4.jpg",
    },
    {
      name: "Habib Abdulhamid",
      avatar: "/static/images/avatar/5.jpg",
    },
    {
      name: "Abdullah Shah",
      avatar: "/static/images/avatar/6.jpg",
    },
  ];

  const mentors = [
    {
      name: "Andrea Curley",
      avatar: "/static/images/avatar/4.jpg",
    },
    {
      name: "Brendan Tierney",
      avatar: "/static/images/avatar/6.jpg",
    },
    {
      name: "Damian Gordon",
      avatar: "/static/images/avatar/10.jpg",
    },
  ];

  const renderGroup = (title, members) => (
    <List
      sx={{
        flex: 1,
        bgcolor: "background.paper",
        margin: 1,
      }}
    >
      <Typography variant="h6" sx={{ padding: 1, textAlign: "center" }}>
        {title}
      </Typography>
      {members.map((member, index) => (
        <React.Fragment key={member.name}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={member.name} src={member.avatar} />
            </ListItemAvatar>
            <ListItemText primary={member.name} />
          </ListItem>
          {index < members.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile, horizontally on larger screens
          justifyContent: "space-around",
          padding: 2,
          width: "100%",
          gap: 2,
        }}
      >
        {renderGroup("ASD Members", asdMembers)}
        {renderGroup("DS Members", dsMembers)}
        {renderGroup("Mentors", mentors)}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack elements on mobile
          justifyContent: "flex-start",
          padding: 4,
          gap: 2,
          width: "100%",
        }}
      >
        <Typography variant="h6" gutterBottom>
          <img
            src={gitIcon}
            className="w-8 h-8 inline-block m-2"
            alt="Github"
          ></img>
          X-Factors' Github
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Button
            variant="contained"
            href="https://github.com/JaraR/DarkPatternDetector.git"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Github
          </Button>
        </Typography>
      </Box>
    </>
  );
}
