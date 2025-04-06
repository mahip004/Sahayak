import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const TeamAvatarCard = ({ title = "Our Team", members = [] }) => {
  const [selectedMember, setSelectedMember] = React.useState(null);

  return (
    <Card
      sx={{
        width: 400,
        margin: "auto",
        mt: 4,
        padding: 2,
        // boxShadow: "1px 1px 1px rgba(0.15, 0.15, 0.15, 0.15)", // Sharper and more visible shadow
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        fontWeight={600}
        color={"#3B3B3B"}
        sx={{ textAlign: "center", mb: 2 }}
      >
        {title}
      </Typography>
      <AvatarGroup sx={{ justifyContent: "center" }}>
        {members.map((member, index) => (
          <Tooltip key={index} title={member.name} arrow>
            <Avatar
              alt={member.name}
              src={member.img}
              onClick={() => setSelectedMember(member.name)}
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        ))}
        <Avatar sx={{ bgcolor: "gray" }}>{`+${members.length}`}</Avatar>
      </AvatarGroup>
      {selectedMember && (
        <Typography variant="h6" sx={{ mt: 2, textAlign: "center" }}>
          {selectedMember}
        </Typography>
      )}
    </Card>
  );
};

export default TeamAvatarCard;
