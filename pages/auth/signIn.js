import { Copyright } from "@mui/icons-material";
import {
  Box,
  Typography,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Alert,
  Stack,
} from "@mui/material";
import React from "react";
import { DiMaterializecss } from "react-icons/di";
import AvatarImg from "../../Components/AvatarImg";

const profile = ({ name = "Lucy" }) => {
  const handleSubmit = (e) => {
    // console.log(e.target.value);
  };
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        alignItems: "cenrer",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <DiMaterializecss
          style={{ fontSize: 100, color: "rgb(71, 130, 218)"}}
        />
      </Box>
      <Box
        sx={{
          pt: 5,
          pb: 2,
          px: 5,
          mx: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.light",
        }}
      >
        <AvatarImg
          src="https://material-app.bootlab.io/static/img/avatars/avatar-1.jpg"
          width={80}
          height={80}
        />
        <Typography component="h2" variant="h6">
          Welcome back, {name}!
        </Typography>
        <Typography component="h3" variant="body2" pt={1}>
          Sign in to your account to continue
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Stack>
            <Alert severity="info" color="primary">
              Use demo@bootlab.io and unsafepassword to sign in
            </Alert>
          </Stack>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography sx={{ textAlign: "center" }}>Forgot password</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default profile;
