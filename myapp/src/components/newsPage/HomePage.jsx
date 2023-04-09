import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { useUserContext } from "../userContext";
import ResponsiveAppBar from "./navbar/Navbar";
import { Cards } from "./cards/Cards";
import { TopNews } from "./topnews/TopNews";
import { fetchTopNews } from "../../api/api";
import { Typography } from "@mui/material";

export const HomePage = ({ dataSource }) => {
  const [newsData, setNewsData] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    dataSource().then((data) => {
      setNewsData(data);
    });
  }, []);

  return (
    <div className={styles.landingPage}>
      <ResponsiveAppBar />
      <div className={styles.cardsWrapper}>
        <TopNews dataSource={fetchTopNews} />
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ mt: 2, mx: 2 }}
        >
          NEW ARTICLES
        </Typography>
        <div className={styles.cardContainer}>
          {newsData.articles &&
            newsData.articles.length > 0 &&
            newsData.articles.map((news) => (
              <Cards key={news.url} news={news} />
            ))}
        </div>
      </div>
    </div>
  );
};
