import styles from "./Cart.module.scss";
import { Link } from "react-router";
import cardLogo from "/icons/cardLogo.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { CardItem } from "../../redux/slices/cartSlice";

const Cart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <Link to="/cart" className={styles.cartLink}>
      <div className={styles.cart}>
        <span className={styles.price}>{totalPrice} руб.</span>
        <span className={styles.divider} />
        <img className={styles.cartIcon} src={cardLogo} alt="" />
        <span className={styles.count}>
          {items.reduce((sum: number, obj: CardItem) => obj.count + sum, 0)}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
