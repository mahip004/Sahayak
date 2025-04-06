import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import LandscapeIcon from "@mui/icons-material/Landscape";
import ParkIcon from "@mui/icons-material/Park";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function FolderList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Helping Hands" src="https://i.pravatar.cc/150?img=3" />
          </ListItemAvatar>
          <ListItemText
            primary="Hosted by Helping Hands NGO"
            secondary="Serving underprivileged children in Delhi for over 5 years"
          />
        </ListItem>

        {/* Divider with spacing */}
        <Box sx={{ px: 2 }}>
          <Divider />
        </Box>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LandscapeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Located in the heart of Delhi"
            secondary="Easily accessible by metro and public transport."
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ParkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Community outreach programs"
            secondary="Engaging children in education, health, and recreation."
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Safe and welcoming environment"
            secondary="Our center offers a warm space for learning and support."
          />
        </ListItem>
      </List>
    </Box>
  );
}
