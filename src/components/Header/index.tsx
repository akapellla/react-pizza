import styles from "./Header.module.scss";

import cardLogo from "/icons/cardLogo.svg";

import Logo from "../Logo";

const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <Logo />

        <div className={styles.cart}>
          <a className={styles.cartLink} href="/cart">
            <span className={styles.price}>520 ₽</span>
            <span className={styles.divider} />
            <img className={styles.cartIcon} src={cardLogo} alt="" />
            <span className={styles.count}>3</span>
          </a>
        </div>
      </header>

      <hr className={`${styles.dividerSec}`} />
    </>
  );
};

export default Header;
