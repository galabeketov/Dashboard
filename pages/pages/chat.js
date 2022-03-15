import { Send } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Fab,
  FormControl,
  Grid,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../../Components/Title";

const profile = () => {
  const [value, setValue] = useState("");
  const contacts = [
    {
      name: "Lucy Lavender",
      id: 1,
      img: "https://material-app.bootlab.io/static/img/avatars/avatar-1.jpg",
    },
    {
      name: "John Sharp",
      id: 2,
      img: "https://material-app.bootlab.io/static/img/avatars/avatar-2.jpg",
    },
    {
      name: "Cassandra Mixxan",
      id: 3,
      img: "https://material-app.bootlab.io/static/img/avatars/avatar-3.jpgg",
    },
  ];
  const [message, setMessage] = useState([
    {
      user: 2,
      message:
        "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo",
      time: "20 minut ago",
    },
    {
      user: 1,
      message:
        "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time: "12 minut ago",
    },
    {
      user: 2,
      message: "Cum ea graeci tractatos. 😄",
      time: "8 minut ago",
    },
    {
      user: 1,
      message:
        "Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍",
      time: "5 minut ago",
    },
    {
      user: 2,
      message:
        "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time: "3 minut ago",
    },
  ]);

  const submit = () => {
    setMessage([...message, { user: 1, message: value, time: "now" }]);
    setValue("");
  };

  return (
    <Container>
      <Title />
      <Box my={5}>
        <Paper elevation={1} sx={{ borderRadius: 2 }}>
          <Grid container>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  padding: 2,
                  borderBottom: "1px solid",
                  flexDirection: "column",
                  width: "100%",
                  borderBottomColor: (theme) => theme.palette.secondary.dark,
                }}
              >
                <FormControl fullWidth>
                  <TextField fullWidth label="Search contacts" />
                </FormControl>
              </Box>
              <Box>
                <List>
                  {contacts.map((contact) => (
                    <ListItem
                      key={contact.id}
                      sx={{
                        cursor: "pointer",
                        width: "100%",
                        "&:hover": {
                          bgcolor: (theme) =>
                            theme.palette.secondary.main + " !important",
                        },
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                        color="success"
                      >
                        <Avatar alt={contact.name} src={contact.img} />
                      </Badge>
                      <Typography sx={{ fontSize: "16px", ml: 2 }}>
                        {contact.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ height: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderLeft: { lg: "1px solid", xs: "none" },
                  borderTop: { xs: "1px solid", lg: "none" },
                  borderColor: (theme) => theme.palette.secondary.dark,
                }}
                display={"flex"}
                flexDirection="column"
              >
                <Box
                  sx={{
                    padding: 2,
                    minHeight: "300px !important",
                    maxHeight: "400px !important",
                    overflow: "auto",
                  }}
                  flex={1}
                >
                  {message.map((msg, i) => (
                    <Box
                      sx={{
                        width: "100%",
                        py: 1,
                        display: "flex",
                        justifyContent:
                          msg.user === 1 ? "flex-end" : "flex-start",
                      }}
                      key={i}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={contacts[msg.user - 1].img}
                          alt={contacts[msg.user - 1].name}
                          size="small"
                        />
                        <Box
                          sx={{
                            ml: 2,
                          }}
                        >
                          <Box
                            sx={{
                              padding: 1,
                              borderRadius: 2,
                              color: msg.user === 1 ? "white" : "black",
                              bgcolor: (theme) =>
                                msg.user === 1
                                  ? theme.palette.primary.main
                                  : theme.palette.secondary.main,
                            }}
                          >
                            <Typography sx={{ fontSize: "16px" }}>
                              {contacts[msg.user - 1].name}
                            </Typography>
                            <Typography sx={{ fontSize: "12px" }}>
                              {msg.message}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              mt: 1,
                              width: "100%",
                              alignItems: "right",
                            }}
                          >
                            {msg.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: 2,
                    borderTop: "1px solid",
                    borderTopColor: (theme) => theme.palette.secondary.dark,
                  }}
                >
                  <FormControl sx={{ flex: 1 }} fullWidth>
                    <TextField
                      label="Type your message"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </FormControl>
                  <Fab
                    color="primary"
                    onClick={submit}
                    sx={{ ml: 2, boxShadow: "none !important" }}
                  >
                    <Send size="large" />
                  </Fab>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default profile;
