import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import nature from "../../../Images/nature.jpg";

import styles from "./Login.module.css";

const Login = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/dashboard";
  };
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <h3 className={styles.myheader}>Welcome to Edunomics</h3>
        <nav className={styles.nav}>
          <Link to='/login' className={styles.item}>
            Login
          </Link>
          <Link to='/signup' className={cx(styles.item, styles.signup)}>
            Signup
          </Link>
        </nav>
        <form className={styles.formData} onSubmit={(e) => handleSubmit(e)}>
          <label className={cx(styles.break, styles.labels)}>Email</label>
          <input
            className={cx(styles.break, styles.inputs)}
            type='text'
            name='email'
          />
          <label className={cx(styles.break, styles.labels)}>Password</label>
          <input
            className={cx(styles.break, styles.inputs)}
            type='password'
            name='password'
          />
          <button className={styles.btn} type='submit'>
            Log In
          </button>
        </form>
        <section className={styles.mainSection}>
          <h2>Where do you want to go today?</h2>
          <p>Share your ultimate travel list with us</p>
        </section>
        <article className={styles.article}>
          <h2>Whatever your style, travel your way</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
          <img src={nature} alt='nature' className={styles.images} />
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </article>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
