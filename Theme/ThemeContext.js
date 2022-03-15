import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { green } from "@mui/material/colors";

export const ColorModeContext = createContext({ toggleMode: () => {} });

const customTheme = (mode) => {
  console.log(mode, "mode keldi");
  return createTheme({
    palette: {
      background: {
        light: "rgb(255, 255, 255)",
        default: "rgb(247, 249, 252)",
        dark: "rgb(35, 48, 63)",
        aside: mode || "rgb(35, 48, 68)",
        primary: "rgb(55, 111, 208)",
      },
      asosiy: {
        main: mode || "rgb(35, 48, 68)",
      },
      text: {
        primary: "#2b3445",
      },
      primary: {
        main: "rgb(55, 111, 208)",
      },
      error: {
        main: "#d61f56",
      },
      secondary: {
        main: "#EBEBEB",
      },
      light: {
        main:
          mode == "#fff"
            ? "rgb(0, 0, 0)"
            : "#ffffff",
        dark: "#000",
      },
      info: {
        main:
          mode == "#fff"
            ? "rgb(0, 0, 0)"
            : "#ffffff",
        dark: "#F6F9FC",
      },
      warning: {
        main: "#f8b800",
        contrastText: "#fff",
      },
      success: {
        main: green[500],
        contrastText: "#fff",
      },
    },
    shadowsHeader: {
      header: "rgba(100, 100, 111, 0.1) 0px 7px 20px 0px;",
      card: "rgba(100, 100, 111, 0.2) 0px 7px 35px 0px;",
      block: "0px 1px 3px rgb(3 0 71 / 9%)",
      box: "0px 8px 45px rgb(3 0 71 / 10%)",
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
    },
  });
};

function MainThemeProvider({ children }) {
  const [mode, setMode] = useState("rgb(35, 48, 68)");
  console.log(mode, "mode2");
  const theme = useMemo(() => customTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleMode: setMode }}>
      <ThemeProvider theme={theme}>
        <Box
          variant="section"
          sx={{
            backgroundColor: theme.palette.background.default,
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MainThemeProvider;
