import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { useUserContext } from "../userContext";
import ResponsiveAppBar from "./navbar/Navbar";
import axios from "axios";
export const HomePage = () => {
  const [newsData, setNewsData] = useState([]);
  const { user } = useUserContext();
  useEffect(() => {
    fetchnewsData();
  }, []);
  const fetchnewsData = async () => {
    const data = await axios.get(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bd5957174e0849d6a0c84bdac1ab20d1"
    );
    setNewsData(data);
  };
  return (
    <div className={styles.landingPage}>
      <ResponsiveAppBar />
    </div>
  );
};
