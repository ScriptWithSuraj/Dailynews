import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import styles from "./Cards.module.css";
import Link from "@mui/material/Link";

export const Cards = ({ news }) => {
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", options);
  };

  return (
    <Box
      width="300px"
      sx={{ mt: 1, mx: 2, mb: 2, display: "flex", flexWrap: "wrap" }}
    >
      <Card sx={{ borderRadius: "10px", position: "relative" }}>
        <CardMedia
          sx={{ borderBottomLeftRadius: 9, borderBottomRightRadius: 9 }}
          component="img"
          height="200px"
          image={news.urlToImage}
        ></CardMedia>
        <CardContent sx={{ overflow: "hidden", pb: "50px", height: "260px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {news.title}
          </Typography>
          <Typography className={styles.cardDescription}>
            {news.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom>~ {formatDate(news.publishedAt)}</Typography>
          <Link size="small" href={news.url}>
            Read More
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
