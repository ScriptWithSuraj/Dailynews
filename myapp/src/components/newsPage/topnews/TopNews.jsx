import React, { useEffect, useState } from "react";
import { Cards } from "../cards/Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Typography } from "@mui/material";

// install Swiper modules
SwiperCore.use([Autoplay]);

export const TopNews = ({ dataSource }) => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    dataSource().then((data) => {
      setNewsData(data.data);
    });
  }, []);

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
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {newsData.articles &&
          newsData.articles.length > 0 &&
          newsData.articles.map((news) => (
            <SwiperSlide>
              <Cards key={news.url} news={news} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
