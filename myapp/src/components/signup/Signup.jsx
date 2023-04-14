import React, { useEffect, useRef, useState } from "react";
import styles from "./Signup.module.css";
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
import styled from "styled-components";
function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const [passVisible, setPassVisisble] = useState(false);
  const handleClickShowPassword = () => setPassVisisble(!passVisible);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const { register, user } = useUserContext();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pass = passRef.current.value;
    if (email && name && pass) register(name, email, pass);
  };
  useEffect(() => {
    if (user) navigate("/");
  });
  const Wave = styled(Box)({
    width: "150%",
    height: "500px",
    position: "absolute",
    display: "flex",
    transform: "rotate(60deg)",
    top: "-290px",
    left: "-70px",
    flexDirection: "column",
    borderRadius: "50%",
    background: "rgb(241,196,15)",
    background:
      "linear-gradient(58deg, rgb(241,196,15,1) 20%, rgb(241,196,15,1) 100%)",
  });
  const TopContainer = styled(Box)({
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0 1.8em ",
    paddingBottom: "5em",
    // position: "relative",
    // zIndex: -1,
  });
  const HeaderContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",

    //
  });
  const HeaderText = styled(Typography)({
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.24,
    color: "black",
    position: "fixed",
    top: "200px",
    left: "15 0px",
    zIndex: 10,
  });
  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <FormControl sx={{ mt: 17, display: "flex" }}>
          <Box
            sx={{
              width: 400,
              minHeight: 400,
              backgroundColor: "#ebe2cc ",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Poppins",
              boxShadow: "0px 4px 10px black",
              overflow: "hidden ",
              position: "relative",
              // backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2)",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                mt: 2,
                color: "#634aa6",
                transform: "scale(1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Sign Up
            </Typography>
            {/* <TopContainer>
              <Wave>
                <HeaderContainer>
                  <HeaderText>sdfsdfsafdhbd</HeaderText>
                </HeaderContainer>
              </Wave>
            </TopContainer> */}
            <TextField
              type="text"
              // color="secondary"
              placeholder="Name"
              size="small"
              inputRef={nameRef}
              sx={{
                mb: 2,
                mt: 4,
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
            <TextField
              type="email"
              color="secondary"
              placeholder="Email Address"
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
                      {passVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="text"
              sx={{
                padding: 0,
                mb: 2,
                minWidth: 0,
                borderRadius: 0,
                textTransform: "none",
                transform: "scale(1)",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Alreay have an account?
            </Button>
            <Button
              sx={{
                backgroundColor: "#634aa6",
                fontWeight: "bold",
                color: "black",
                "&:hover": {
                  // background: " rgb(2,0,36);",
                  background:
                    "radial-gradient(circle, rgba(63,94,251,1) 0%, #634aa6 100%)",
                },
              }}
              type="submit"
            >
              Register
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
}

export default Signup;
