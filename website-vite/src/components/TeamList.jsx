import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function TeamList() {
  const asdMembers = [
    {
      name: "Luke Skywalker",
      role: "Jedi Knight",
      avatar: "/static/images/avatar/1.jpg",
    },
    {
      name: "Han Solo",
      role: "Pilot",
      avatar: "/static/images/avatar/2.jpg",
    },
    {
      name: "Leia Organa",
      role: "Rebel Leader",
      avatar: "/static/images/avatar/3.jpg",
    },
  ];

  const dsMembers = [
    {
      name: "Ahsoka Tano",
      role: "Jedi Knight",
      avatar: "/static/images/avatar/4.jpg", // Use the appropriate avatar for Ahsoka
    },
    {
      name: "Padmé Amidala",
      role: "Senator",
      avatar: "/static/images/avatar/5.jpg",
    },
    {
      name: "Obi-Wan Kenobi",
      role: "Jedi Master",
      avatar: "/static/images/avatar/6.jpg",
    },
  ];

  const mentors = [
    {
      name: "Yoda",
      role: "Jedi Master",
      avatar: "/static/images/avatar/4.jpg", // Use the same or different avatar as per your preference
    },
    {
      name: "Obi-Wan Kenobi",
      role: "Jedi Master",
      avatar: "/static/images/avatar/6.jpg", // Use the same or different avatar as per your preference
    },
    {
      name: "Mace Windu",
      role: "Jedi Master",
      avatar: "/static/images/avatar/10.jpg", // Add an appropriate avatar for Mace Windu
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
            <ListItemText
              primary={member.name}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {member.role}
                </Typography>
              }
            />
          </ListItem>
          {index < members.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: 2,
        width: "100%",
      }}
    >
      {renderGroup("ASD Members", asdMembers)}
      {renderGroup("DS Members", dsMembers)}
      {renderGroup("Mentors", mentors)}
    </Box>
  );
}
