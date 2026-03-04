import CartItem from "../../components/CartItem";
import { clearItems } from "../../redux/slices/cartSlice";
import styles from "./Cartpage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartEmpty from "../../components/CartEmpty";

import { Link } from "react-router";
import type { RootState } from "../../redux/store";
import type { CardItem } from "../../redux/slices/cartSlice";

const Cartpage = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  console.log(items);

  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (items.length) {
    return (
      <section className={styles.cartContainer}>
        <div className={styles.cartTitle}>
          <div className={styles.leftCartTitle}>
            <img src="/icons/cartLogo.svg" alt="dfg" />
            <h1>Корзина</h1>
          </div>
          <div className={styles.rightCartTitle}>
            <button onClick={onClickClear}>
              <img src="/icons/trashLogo.svg" alt="" />
              <p>Очистить корзину</p>
            </button>
          </div>
        </div>
        <div className={styles.items}>
          {items.map((items) => {
            return <CartItem key={items.id} {...items}></CartItem>;
          })}
        </div>
        <div className={styles.cartDesc}>
          <div className={styles.cartTopDesc}>
            <p>
              Всего пицц:{" "}
              <span>{items.reduce((sum: number, item: CardItem) => sum + item.count, 0)} шт.</span>
            </p>
            <p className={styles.priceBlock}>
              Сумма заказа: <span className={styles.cartPrice}>{totalPrice} руб.</span>
            </p>
          </div>

          <div className={styles.cartBotDesc}>
            <Link to="/">
              <button className={styles.backBtn}>
                <img src="/icons/backLogo.svg" alt="" />
                Вернуться назад
              </button>
            </Link>
            <a href="">
              <button className={styles.confirmBtn}>Оплатить сейчас</button>
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return <CartEmpty />;
  }
};

export default Cartpage;
