import { Home } from "@mui/icons-material";
import { LinearProgress, Paper, Typography } from "@mui/material";
import React from "react";

const StaticsCard = ({ percent, name, title, icon, ...props }) => {
  return (
    <Paper elevation={1} sx={{ borderRadius: 2, padding: 2, mb: 3 }} {...props}>
      <Typography
        sx={{
          alignItems: "center",
          fontSize: "32px !important",
          fontWeight: "300",
          display: "flex",
          mb: 2,
          "& svg": { fontSize: "32px !important" },
          justifyContent: "space-between",
        }}
      >
        {title} {icon}
      </Typography>
      <Typography mb={1} fontSize={"12px"}>
        {name}
      </Typography>
      <LinearProgress variant="determinate" value={percent} />
    </Paper>
  );
};

export default StaticsCard;
