import React from "react";
import styles from "./HomePage.module.css";
import { useUserContext } from "../userContext";
import ResponsiveAppBar from "./navbar/Navbar";

export const HomePage = () => {
  const { user, logout } = useUserContext();
  return (
    <div className={styles.landingPage}>
      <ResponsiveAppBar />
      <h1>Homepage</h1>
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
