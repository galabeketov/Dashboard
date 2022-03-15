import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fab } from "@mui/material";
import { green, lightGreen } from "@mui/material/colors";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DashboardCard({ data }) {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: "250px",
        padding: "10px",
        background: data.blue ? "rgba(55, 111, 208, 0.125)" : "",
        color: data.blue ? "rgb(55, 111, 208)" : "",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Typography variant="h6">{data.title}</Typography>
          {data.day ? (
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              sx={{ boxShadow: "none", fontSize: "10px" }}
            >
              {data.day}
            </Fab>
          ) : (
            ""
          )}
        </Box>
        <Typography variant="h4">{data.sum}</Typography>
        <Box sx={{ display: "flex", gap: 0.8, py: 1 }}>
          <Typography
            sx={{
              color: data.off > 0 ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)",
              background:
                data.off > 0
                  ? "rgba(76, 175, 80, 0.1)"
                  : "rgba(244, 67, 54, 0.1)",
            }}
          >
            {data.off}%{" "}
          </Typography>{" "}
          Since last month
        </Box>
      </CardContent>
    </Card>
  );
}
