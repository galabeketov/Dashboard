import React from "react";
import Title from "../Components/Title";
import { database } from "../Data";
import CardWithImage from "../Components/ProjectCards/CardWithImage";
import { Box, Grid } from "@mui/material";

const profile = () => {
  const projects = database.projects;

  console.log(projects);
  return (
    <Box>
      <Title />
      <Grid container spacing={2}>
        {projects.map((item) => (
          <Grid item sm={12} md={12} lg={6} xl={3}>
            <CardWithImage obj={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default profile;
