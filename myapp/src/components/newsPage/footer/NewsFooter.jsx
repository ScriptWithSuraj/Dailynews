import React from "react";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "styled-components";
import { Link } from "@mui/material";
const NewsFooter = () => {
  const FooterContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent ",
    padding: "1rem",
    marginTop: "2rem",
    "& svg": {
      color: "black",
      margin: "0.5rem",
      fontSize: "2rem",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  });

  return (
    <FooterContainer
      id="footer"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <div>
        <Link href="https://www.facebook.com/surajsingh.bisht1">
          <FacebookIcon />
        </Link>
        <Link href="https://www.instagram.com/krissbisht/">
          <InstagramIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/suraj-bisht-46967b203/">
          <LinkedInIcon />
        </Link>
      </div>
      <p>&copy; 2023 Daily News. All rights reserved.</p>
    </FooterContainer>
  );
};

export default NewsFooter;
