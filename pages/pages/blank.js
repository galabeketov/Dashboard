import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MainCard from "../../Components/Cards/MainCard";
import Title from "../../Components/Title";

const profile = () => {
  return (
    <Container>
      <Title />
      <Box mt={5}>
        <MainCard title="Empty Card">
          <Typography>Empty Card</Typography>
        </MainCard>
      </Box>
    </Container>
  );
};

export default profile;
