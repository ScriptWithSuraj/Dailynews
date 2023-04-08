import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { useUserContext } from "../userContext";
import ResponsiveAppBar from "./navbar/Navbar";
import { Cards } from "./cards/Cards";
import { TopNews } from "./topnews/TopNews";
import { fetchTopNews } from "../../api/api";

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
      <TopNews dataSource={fetchTopNews} />
      <div className={styles.cardContainer}>
        {newsData.articles &&
          newsData.articles.length > 0 &&
          newsData.articles.map((news) => <Cards key={news.url} news={news} />)}
      </div>
    </div>
  );
};
