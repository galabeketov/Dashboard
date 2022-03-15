import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

export default function TaskboardItem({ children }) {
  return (
    <Box
      draggable="true"
      sx={{
        backgroundColor: "background.success",
        padding: "8px 16px",
        borderWidth: 1,
        borderColor: orange[500],
        borderStyle: "solid",
        borderRadius: 3,
        py: 2,
        my: 2,
      }}
    >
      {children}
    </Box>
  );
}
