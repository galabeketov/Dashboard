import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MainCard = ({ title, children, ...props }) => {
  return (
    <Paper
      sx={{ width: "100%", borderRadius: 2, p: 2, mb: 3 }}
      {...props}
      elevation={1}
    >
      <Typography variant="h6" fontSize={"16px"} fontWeight="bold">
        {title}
      </Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
};

export default MainCard;
