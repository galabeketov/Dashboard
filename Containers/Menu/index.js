import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import React from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Link from "next/link";
import MenuLink from "../../Components/MenuLink";

const ListStyles = {
  width: "100%",
  maxWidth: 360,
  flex: 1,
  pl: 2,
  fontSize: "14px",
  overflowY: "auto",
  '& svg': { color: 'info.main' },
  "&::-webkit-scrollbar": {
    width: "0.7em",
    height: "1em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "gray",
    borderRadius: 5,
    outline: "1px solid slategrey",
  },
};

export default function Menu() {
  const [openPages, setOpenPages] = React.useState(false);
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [openInvoices, setInvoices] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClickPages = () => {
    setOpenPages(!openPages);
  };
  const handleClickDashboard = () => {
    setOpenDashboard(!openDashboard);
  };
  const handleClickAuth = () => {
    setOpenAuth(!openAuth);
  };

  const handleClickInvoices = () => {
    setInvoices(!openInvoices);
  };

  return (
    <List
      sx={ListStyles}
      component="nav"
      aria-labelledby="nested-list-subheader"
      color="info.main"
      subheader={
        <ListSubheader
          component="div"
          sx={{
            backgroundColor: (theme) => theme.palette.asosiy.main,
            color: "info.main",
          }}
          id="nested-list-subheader"
        >
          PAGES
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickDashboard}>
        <ListItemIcon>
          <DisplaySettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {openDashboard ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openDashboard} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuLink primary="Default" href="/dashboard/default" />
          <MenuLink primary="Analytics" href="/dashboard/analytics" />
          <MenuLink primary="Sass" href="/dashboard/sass" />
        </List>
      </Collapse>
      {/* //pages */}

      <ListItemButton onClick={handleClickPages}>
        <ListItemIcon>
          <DisplaySettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
        {openPages ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPages} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuLink primary="Profile" href="/pages/profile" />
          <MenuLink primary="Settings" href="/pages/settings" />
          <MenuLink primary="Pricing" href="/pages/pricing" />
          <MenuLink primary="Chat" href="/pages/chat" />
          <MenuLink primary="Blank" href="/pages/blank" />
        </List>
      </Collapse>
      {/* Projects */}
      <Link href="/projects">
        <a>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </a>
      </Link>
      {/* Orders */}
      <Link href="/orders">
        <a>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </a>
      </Link>

      {/* Invoices */}
      <ListItemButton onClick={handleClickInvoices}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
        {openInvoices ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openInvoices} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuLink primary="List" href="/invoices/list" />
          <MenuLink primary="Detail" href="/invoices/detail" />
        </List>
      </Collapse>

      {/* Tasks */}
      <Link href="/tasks">
        <a>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </a>
      </Link>

      {/* Calendar */}

      <Link href="/calendar">
        <a>
          {" "}
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </a>
      </Link>

      {/* Auth */}
      <ListItemButton onClick={handleClickAuth}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Auth" />
        {openAuth ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAuth} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuLink primary="Sign In" href="/auth/signIn" />
          <MenuLink primary="Sign Up" href="/auth/signUp" />
          <MenuLink primary="Reset Password" href="/auth/resPassword" />
          <MenuLink primary="404 Page" href="/auth/404page" />
          <MenuLink primary="500 Page" href="/auth/500page" />
        </List>
      </Collapse>
    </List>
  );
}
