import { Backup, UploadFileSharp } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarImg from "../../Components/AvatarImg";
import MainCard from "../../Components/Cards/MainCard";
import Title from "../../Components/Title";

const profile = () => {
  return (
    <Container>
      <Title />
      <Box mt={5}>
        <MainCard title={"Public info"}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box py={1}>
                <FormControl
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 3,
                    fontSize: "16px",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Username"
                    defaultValue={"lucylavender"}
                  />
                  <TextField
                    fullWidth
                    multiline={true}
                    mt={2}
                    label="Biography"
                    defaultValue={
                      "Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                    }
                  />
                  <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Save changes
                  </Button>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box
                py={1}
                display={"flex"}
                flexDirection="column"
                alignItems={"center"}
              >
                <AvatarImg width={120} height={120} />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Backup />}
                  sx={{ my: 1 }}
                >
                  Upload
                </Button>
                <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
                  For best results, use an image at least 128px by 128px in .jpg
                  format
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MainCard>
        <MainCard title={"Private info"}>
          <FormControl
            sx={{
              py: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Grid width={'100%'} container spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  label={"First name"}
                  defaultValue={"Lucy"}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  label={"Last name"}
                  defaultValue={"Lavender"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={"Email"}
                  type="email"
                  defaultValue={"lucylavender@gmail.com"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label={"Adress"} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label={"Appartment, Studio or floor"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField fullWidth label={"City"} />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField fullWidth label={"State"} />
              </Grid>
              <Grid item xs={12} md={6} lg={2}>
                <TextField fullWidth label={"Zip"} />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", mt: 2, width: "auto" }}
            >
              Save changes
            </Button>
          </FormControl>
        </MainCard>
      </Box>
    </Container>
  );
};

export default profile;
