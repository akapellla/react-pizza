import styles from "./Logo.module.scss";

import mainLogo from "/icons/mainLogo.svg";

const Logo = () => {
  return (
    <div className={styles.left}>
      <a className={styles.logo} href="/">
        <img className={styles.logoImg} src={mainLogo} alt="React Pizza" />
        <div className={styles.logoText}>
          <strong className={styles.title}>REACT PIZZA</strong>
          <span className={styles.subtitle}>самая вкусная пицца во вселенной</span>
        </div>
      </a>
    </div>
  );
};

export default Logo;
