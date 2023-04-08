import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export const Cards = ({ news }) => {
  console.log(news);
  return (
    <Box width="300px" sx={{ mt: 4, mx: 2 }}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia
          sx={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
          component="img"
          height="200px"
          image={news.urlToImage}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography>{news.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
