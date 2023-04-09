import React, { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import {
  TextField,
  Button,
  FormControl,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useUserContext } from "../userContext.js";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../googleButton/GoogleButton";
function Login() {
  //   const nameRef = useRef();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const [passVisible, setPassVisisble] = useState(false);
  const handleClickShowPassword = () => setPassVisisble(!passVisible);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const { login, forgotPass } = useUserContext();
  const handleForgotPass = () => {
    const email = emailRef.current.value;
    if (email) forgotPass(email).then(() => (emailRef.current.value = "  "));
  };
  const { user } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    if (email && pass) login(email, pass);
  };
  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <FormControl onSubmit={onSubmit} sx={{ mt: 17, display: "flex" }}>
          <Box
            sx={{
              width: 400,
              height: 400,
              backgroundColor: "#ebe2cc ",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Poppins",
              padding: "1rem",
              margin: "0 auto",
              "@media (min-width:600px)": {
                padding: "2rem",
              },
              "@media (min-width:960px)": {
                padding: "3rem",
              },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                // mt: 0,
                color: "#634aa6",
                transform: "scale(1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Sign In
            </Typography>
            <TextField
              type="Email"
              color="secondary"
              placeholder="Email Address"
              variant="outlined"
              size="small"
              inputRef={emailRef}
              sx={{
                mb: 2,
                width: "58%",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#634aa6", // Change this to the desired color
                  },
                transform: "scale(1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <TextField
                type={passVisible ? "text" : "password"}
                color="secondary"
                placeholder="Password"
                size="small"
                inputRef={passRef}
                sx={{
                  mb: 2,
                  width: "58%",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#634aa6",
                    },
                  transform: "scale(1)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {passVisible ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className={styles.loginButtonWrapper}>
                <Button
                  variant="text"
                  sx={{
                    padding: 0,
                    minWidth: 0,
                    borderRadius: 0,
                    textTransform: "none",
                    transform: "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={handleForgotPass}
                >
                  forgot password?
                </Button>
                <Button
                  variant="text"
                  sx={{
                    padding: 0,
                    minWidth: 0,
                    borderRadius: 0,
                    textTransform: "none",
                    transform: "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => navigate("/signup")}
                >
                  dont't have an account?
                </Button>
                <Button
                  sx={{
                    transform: "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                ></Button>
              </div>
            </Box>
            <Button
              sx={{
                backgroundColor: "#634aa6",
                fontWeight: "bold",
                color: "black",
                // mt: 2,
                mb: 1,
              }}
              type="submit"
            >
              Sign In
            </Button>
            <Typography
              sx={{
                color: "black",
                transform: "scale(1)",
                mb: 1,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              OR
            </Typography>
            <GoogleButton />
          </Box>
        </FormControl>
      </form>
    </div>
  );
}

export default Login;
