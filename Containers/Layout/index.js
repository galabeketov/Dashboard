import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import { Avatar, Badge, Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { DiMaterializecss } from "react-icons/di";
// DiMaterializecss;
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../Components/SearchInput";

import { database } from "../../Data";
import Menu from "../Menu";
import AppbarButton from "../../Components/AppbarButton";
import TemporaryDrawer from "../../Components/DrawerSetColor";

const drawerWidth = 270;

export default function Layout(props) {
  const window = props.window || undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.asosiy.main,
        color: "info.main",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "between",
      }}
    >
      <Toolbar>
        <DiMaterializecss
          style={{ fontSize: 36, color: "rgb(71, 130, 218)", marginRight: 10 }}
        />{" "}
        {/* <Badge badgeContent="PRO" color="success" sx={{ p: 1 }}> */}
        <Typography variant="body1">Material App</Typography>
        {/* </Badge> */}
      </Toolbar>
      <Menu />
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="avatar"
              src="https://material-app.bootlab.io/static/img/avatars/avatar-1.jpg"
              width="25"
              height="25"
            />
          </Badge>

          <Box sx={{ ml: 2 }}>
            <Typography component="h2" variant="body2">
              Lucy Lavender
            </Typography>
            <Typography
              component="h3"
              variant="body2"
              color="info.main"
              sx={{ fontSize: 10 }}
            >
              FrontEnd Developer
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "background.light",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <AppbarButton
              title="messages"
              badgeContent={3}
              array={database.messages}
            >
              <ChatBubbleOutlineOutlinedIcon />
            </AppbarButton>
            <AppbarButton
              title="notifications"
              badgeContent={4}
              array={database.notifications}
            >
              <NotificationsOutlinedIcon />
            </AppbarButton>
            <AppbarButton title="account" badgeContent={3}>
              <PowerSettingsNewOutlinedIcon />
            </AppbarButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          backgroundColor: "background.default",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
              bgColor: "background.default",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // backgroundColor: "background.dark",
          // height: "100%",
          position: "relative",
        }}
      >
        <Toolbar />
        {props.children}
        <TemporaryDrawer
          button={
            <IconButton
              sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                p: 2,
                backgroundColor: "background.primary",
                "&:hover": {
                  backgroundColor: "background.primary",
                },
              }}
              color="info"
            >
              <PaletteIcon />
            </IconButton>
          }
        />
      </Box>
    </Box>
  );
}
