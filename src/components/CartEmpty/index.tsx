import React from "react";

import { Link } from "react-router";
import styles from "./CartEmpty.module.scss";

const CartEmpty: React.FC = () => {
  return (
    <section className={styles.emptyCartContainer}>
      <h1 className={styles.emptyTitle}>Корзина пустая 😕</h1>
      <p className={styles.emptyDesc}>Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p className={styles.emptyDesc}>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className={styles.emptyImg} src="/icons/emptyCart.png" alt="" />

      <Link to="/">
        <button className={styles.emptyButton}>Вернуться назад</button>
      </Link>
    </section>
  );
};

export default CartEmpty;
