import React, { useState } from "react";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import styles from "./Auth.module.css";
const Auth = () => {
  const [switchPage, setSwitchPage] = useState(false);
  const togglePage = () => {
    setSwitchPage((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      {switchPage ? <Signup /> : <Login />}
      <p onClick={togglePage} className={styles.text}>
        {switchPage ? "Already have an account?" : "Don't have an account? "}
      </p>
    </div>
  );
};

export default Auth;
