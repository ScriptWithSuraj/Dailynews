import React, { useEffect, useState } from "react";
import { Cards } from "../cards/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import styles from "./TopNews.Module.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Typography } from "@mui/material";
import { EqualHeight } from "react-equal-height";
SwiperCore.use([Autoplay]);

export const TopNews = ({ dataSource }) => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    dataSource().then((data) => {
      setNewsData(data.data);
    });
  }, []);

  console.log(newsData.articles);

  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ mt: 2, mx: 2 }}
      >
        TOP STORIES
      </Typography>
      <EqualHeight>
        <Swiper
          // spaceBetween={1}
          slidesPerView={"auto"}
          autoplay={{ delay: 2500 }}
        >
          <div className={styles.cardContainer}>
            {newsData.articles &&
              newsData.articles.length > 0 &&
              newsData.articles.map((news) => (
                <SwiperSlide key={news.url}>
                  <div className={styles.cardWrapper} key={news.url}>
                    <Cards key={news.urlToImage} news={news} />
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </EqualHeight>
    </>
  );
};
