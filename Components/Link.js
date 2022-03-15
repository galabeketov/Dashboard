import { Typography } from "@mui/material";
import React from "react";

const MyLink = ({ children, ...props }) => {
  return (
    <Typography
      {...props}
      sx={{
        cursor: "pointer",
        color: "#4782DA",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {children}
    </Typography>
  );
};

export default MyLink;
