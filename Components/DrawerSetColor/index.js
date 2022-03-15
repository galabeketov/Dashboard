import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { ColorModeContext } from "../../Theme/ThemeContext";

const colors = [
  {
    color: "#000",
    title: "Dark",
    mode: "rgb(35, 48, 64)",
  },
  {
    color: "rgb(245 , 245 , 245 )",
    title: "Light",
    mode: "#fff",
  },
  {
    color:
      "linear-gradient(-45deg, rgb(35, 48, 63) 50%, rgb(245, 245, 245) 0px)",
    title: "Default",
    mode: "rgb(35, 48, 63)",
  },
  {
    color:
      "linear-gradient(-45deg, rgb(71, 130, 218) 50%, rgb(245, 245, 245) 0px)",
    title: "Blue",
    mode: "rgb(71, 130, 218)",
  },
  {
    color:
      "linear-gradient(-45deg, rgb(76, 175, 80) 50%, rgb(245, 245, 245) 0px)",
    title: "Green",
    mode: "rgb(76, 175, 80)",
  },
  {
    color:
      "linear-gradient(-45deg, rgb(63, 81, 181) 50%, rgb(245, 245, 245) 0px)",
    title: "Indigo",
    mode: "rgb(63, 81, 181)",
  },
];

export default function TemporaryDrawer({ button }) {
  const { toggleMode } = React.useContext(ColorModeContext);
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const ListBox = () => (
    <Box
      sx={{ width: 250, pt: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItem button>
        <ListItemText primary="Select a demo" />
      </ListItem>

      <Box
        sx={{
          backgroundColor: "background.primary",
          p: 2,
          mx: 1,
          my: 2,
          borderRadius: 2,
          color: "light.main",
        }}
      >
        Hello! Select your style below. Choose the ones that best fits your
        needs.
      </Box>

      <Grid container spacing={1} sx={{ p: 2 }}>
        {colors.map((item) => (
          <Grid
            item
            key={item.title}
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{ border: "1px solid gray", py: 1, px: 2, borderRadius: 1 }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: 60,
                  borderRadius: "50%",
                  background: `${item.color}`,
                }}
                onClick={() => {
                  toggleMode(item.mode);
                  toggleDrawer(false);
                }}
              ></Box>
            </Box>
            <Typography>{item.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>{button}</Button>
        <SwipeableDrawer
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <ListBox />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
