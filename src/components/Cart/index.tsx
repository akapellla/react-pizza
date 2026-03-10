import styles from "./Cart.module.scss";
import { Link } from "react-router";
import cardLogo from "/icons/cardLogo.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { CartItem } from "../../redux/slices/cart/types";

import React from "react";

const Cart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("cart", json);
  }, [items]);

  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cart}>
        <span className={styles.price}>{totalPrice} руб.</span>
        <span className={styles.divider} />
        <img className={styles.cartIcon} src={cardLogo} alt="" />
        <span className={styles.count}>
          {items.reduce((sum: number, obj: CartItem) => obj.count + sum, 0)}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
