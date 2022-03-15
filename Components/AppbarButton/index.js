import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

export default function AppbarButton({
  title,
  badgeContent,
  children,
  array = [],
}) {
  console.log(array);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Tooltip title={title}>
        <IconButton
          color="secondary"
          sx={{ display: { xs: "none", sm: "block" } }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={badgeContent} color="primary">
            {children}
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {array.map((item) => (
          <MenuItem onClick={handleClose}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={item.image} alt={item.name} />
              <Box sx={{ ml: 2 }}>
                <Typography component="h2" variant="h6">
                  {item.name}
                </Typography>
                <Typography component="h3" variant="body2">
                  {item.message}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
