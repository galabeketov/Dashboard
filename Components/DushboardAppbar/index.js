import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import ReplayIcon from "@mui/icons-material/Replay";
import MyPopper from "../MyPopper";

export default function DushboardAppBar({ name }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          color: "black",
          py: 4,
          borderBottom: "1px solid black",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                py: 1,
                fontSize: "1.5rem",
                fontWeight: "600",
                lineHeight: "1.25rem",
              }}
            >
              {name} Dashboard
            </Typography>
            <Typography variant="bady1" component="div" sx={{ flexGrow: 1 }}>
              Welcome back, Lucy! We've missed you. 👋
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ReplayIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FilterListIcon />
            </IconButton>
            <MyPopper />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
