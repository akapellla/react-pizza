import styles from "./Cart.module.scss";

import { Link } from "react-router";

import cardLogo from "/icons/cardLogo.svg";

const Cart = () => {
  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cart}>
        <span className={styles.price}>520 ₽</span>
        <span className={styles.divider} />
        <img className={styles.cartIcon} src={cardLogo} alt="" />
        <span className={styles.count}>3</span>
      </div>
    </Link>
  );
};

export default Cart;
