import React from "react";
import cx from "classnames";

import notebook from "../../../Images/notebook.jpg";

import styles from "./Signup.module.css";

const Signup = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/";
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.img} src={notebook} alt='notebook' />
        <form className={styles.formData} onSubmit={(e) => handleSubmit(e)}>
          <h3>SIGN Up</h3>
          <label className={cx(styles.break, styles.labels)}>Name</label>
          <input className={cx(styles.break)} type='text' name='name' />
          <label className={cx(styles.break, styles.labels)}>Email ID</label>
          <input className={cx(styles.break)} type='email' name='email' />
          <label className={cx(styles.break, styles.labels)}>Password</label>
          <input className={cx(styles.break)} type='password' name='password' />
          <label className={cx(styles.break, styles.labels)}>
            Mobile Number
          </label>
          <input className={cx(styles.break)} type='number' name='mobile' />
          <button type='submit' className={styles.btn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
