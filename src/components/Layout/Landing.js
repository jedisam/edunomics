import React from "react";
import img from "../../Images/Landing.jpg";

import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.overlay} /> */}
      <div className={styles.landing}>
        {/* <img src={img} alt='landing' style={styles.image} /> */}
        <h3 className={styles.myheader}>Welcome to Edunomics</h3>
        <nav className={styles.nav}>
          <p className={styles.item}>Login</p>
          {/* <a href='/'>Click Me</a> */}
          <p className={styles.item}>Signup</p>
        </nav>
      </div>
    </div>
  );
};

export default Landing;
