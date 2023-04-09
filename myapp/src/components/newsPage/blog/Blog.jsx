import React from "react";
import ResponsiveAppBar from "../navbar/Navbar";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <ResponsiveAppBar />
      <h1>BLOG</h1>
    </div>
  );
};
