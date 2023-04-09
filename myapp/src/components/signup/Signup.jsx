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
  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <FormControl sx={{ mt: 17, display: "flex" }}>
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
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mt: 10, color: "#634aa6" }}
            >
              Register Now
            </Typography>
            <TextField
              type="text"
              // color="secondary"
              placeholder="Name"
              size="small"
              inputRef={nameRef}
              sx={{
                mb: 2,
                mt: 2,
                width: "58%",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#634aa6", // Change this to the desired color
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
