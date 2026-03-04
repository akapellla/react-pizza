import styles from "./Logo.module.scss";
import React from "react";
import { Link } from "react-router";

import mainLogo from "/icons/mainLogo.svg";

const Logo: React.FC = () => {
  return (
    <>
      <div className={styles.left}>
        <Link to={"/"} className={styles.logo}>
          <img className={styles.logoImg} src={mainLogo} alt="React Pizza" />
          <div className={styles.logoText}>
            <strong className={styles.title}>REACT PIZZA</strong>
            <span className={styles.subtitle}>самая вкусная пицца во вселенной</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
