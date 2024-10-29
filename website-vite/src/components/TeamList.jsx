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
      name: "Michael Brown",
      role: "Team Lead",
      avatar: "/static/images/avatar/1.jpg",
    },
    {
      name: "Travis Howard",
      role: "Developer",
      avatar: "/static/images/avatar/2.jpg",
    },
    {
      name: "Sarah Smith",
      role: "Designer",
      avatar: "/static/images/avatar/3.jpg",
    },
  ];

  const dsMembers = [
    {
      name: "Michael Brown",
      role: "Data Analyst",
      avatar: "/static/images/avatar/4.jpg",
    },
    {
      name: "Emily Davis",
      role: "Tester",
      avatar: "/static/images/avatar/5.jpg",
    },
    {
      name: "Daniel Lee",
      role: "DevOps Engineer",
      avatar: "/static/images/avatar/6.jpg",
    },
  ];

  const mentors = [
    {
      name: "Sophia Wilson",
      role: "Project Manager",
      avatar: "/static/images/avatar/7.jpg",
    },
    {
      name: "James Taylor",
      role: "Frontend Developer",
      avatar: "/static/images/avatar/8.jpg",
    },
    {
      name: "Isabella Martinez",
      role: "Backend Developer",
      avatar: "/static/images/avatar/9.jpg",
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
