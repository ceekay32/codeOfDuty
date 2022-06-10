import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import useMediaQuery from "@mui/material/useMediaQuery";
import fire from "../../Firebase";
import { auth } from "../../Firebase";
import { signInWithGoogle } from "../../Firebase";
import {
  googleProvider,
  githubProvider,
  facebookProvider,
} from "../../Firebase";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/jagannath-r-kulakarni-a465841a7/"
        target="_blank"
      >
        Blog Bro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const m1 = useMediaQuery("(min-width:430px)");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    try {
      fire
        .auth()
        .signInWithEmailAndPassword(data.get("email"), data.get("password"))
        .then((u) => {
          alert("successfully signed up");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    } catch (err) {
      console.log(err.message);
      alert("something went wrong");
    }
  };

  const googleLogin = async (event) => {
    event.preventDefault();
    console.log(fire.auth().currentUser);

    await auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log("here bro");
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const githubLogin = async (event) => {
    event.preventDefault();
    console.log(fire.auth().currentUser);

    await auth
      .signInWithPopup(githubProvider)
      .then((res) => {
        console.log("here bro");
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const facebookLogin = async (event) => {
    event.preventDefault();
    console.log(fire.auth().currentUser);

    fire.auth().signInWithRedirect(facebookProvider);
  };

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
        console.log(user);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        // style={{ paddingLeft: "7%", paddingRight: "7%" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", backgroundColor: "black" }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            >
              Sign In
            </Button>
            <p style={{ textAlign: "center", marginTop: "-5px" }}> Or with</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-10px",
              }}
            >
              <GoogleIcon
                style={{
                  fontSize: m1 ? "70px" : "60px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={googleLogin}
              />
              {/* <LinkedInIcon
                style={{
                  fontSize: m1 ? "70px" : "60px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              />
              <GitHubIcon
                style={{
                  fontSize: m1 ? "70px" : "60px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={githubLogin}
              />
              <FacebookIcon
                style={{
                  fontSize: m1 ? "70px" : "60px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={facebookLogin}
              /> */}
            </div>
            <br />
            <Grid container>
              <Grid
                item
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  href="#"
                  variant="body2"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "black",
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
