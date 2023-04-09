import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../userContext";

function GoogleButton() {
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useUserContext();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <Button
      variant="contained"
      onClick={loginWithGoogle}
      sx={{
        backgroundColor: "transparent",
        color: "#000",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      }}
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="#EA4335"
            d="M17.64 9.204c0-.633-.056-1.247-.162-1.84H9v3.48h4.83a4.14 4.14 0 0 1-1.8 2.715v2.25h2.916a8.964 8.964 0 0 0 2.694-6.605z"
          />
          <path
            fill="#4285F4"
            d="M9 18c2.454 0 4.485-.81 5.973-2.198l-2.916-2.25c-.81.54-1.845.855-3.057.855-2.345 0-4.317-1.584-5.016-3.705H.957v2.34A8.996 8.996 0 0 0 9 18z"
          />
          <path
            fill="#FBBC05"
            d="M3.984 10.53a5.61 5.61 0 0 1 0-3.564v-2.34H.957a8.996 8.996 0 0 0 0 8.244l3.027-2.34z"
          />
          <path
            fill="#34A853"
            d="M9 3.6c1.29 0 2.46.444 3.384 1.314l2.54-2.526C13.482.882 11.454 0 9 0A8.996 8.996 0 0 0 .957 5.796l3.027 2.34c.7-2.121 2.672-3.705 5.016-3.705z"
          />
          <path fill="none" d="M0 0h18v18H0z" />
        </svg>
      }
    >
      Sign In with Google
    </Button>
  );
}

export default GoogleButton;
