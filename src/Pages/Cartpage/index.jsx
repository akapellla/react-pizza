import CartItem from "../../components/CartItem";
import styles from "./Cartpage.module.scss";

import { Link } from "react-router";

const Cartpage = () => {
  return (
    <section className={styles.cartContainer}>
      <div className={styles.cartTitle}>
        <div className={styles.leftCartTitle}>
          <img src="/icons/cartLogo.svg" alt="dfg" />
          <h1>Корзина</h1>
        </div>
        <div className={styles.rightCartTitle}>
          <button>
            <img src="/icons/trashLogo.svg" alt="" />
            <p>Очистить корзину</p>
          </button>
        </div>
      </div>

      <div className={styles.cartItems}>
        <CartItem title="Сырный цыпленок" />
        <CartItem title="Креветки по-азиатски" />
        <CartItem title="Креветки по-азиатски" />
        <CartItem title="Креветки по-азиатски" />
        <CartItem title="Креветки по-азиатски" />
      </div>

      <div className={styles.cartDesc}>
        <div className={styles.cartTopDesc}>
          <p>
            Всего пицц: <span>3 шт.</span>
          </p>
          <p className={styles.priceBlock}>
            Сумма заказа: <span className={styles.cartPrice}>900 ₽</span>
          </p>
        </div>

        <div className={styles.cartBotDesc}>
          <a href="">
            <button className={styles.backBtn}>
              <img src="/icons/backLogo.svg" alt="" />
              Вернуться назад
            </button>
          </a>
          <a href="">
            <button className={styles.confirmBtn}>Оплатить сейчас</button>
          </a>
        </div>
      </div>

      {/* <h1 className={styles.emptyTitle}>Корзина пустая 😕</h1>
      <p className={styles.emptyDesc}>Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p className={styles.emptyDesc}>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img className={styles.emptyImg} src="/icons/emptyCart.png" alt="" />

      <Link to="/">
        <button className={styles.emptyButton}>Вернуться назад</button>
      </Link> */}
    </section>
  );
};

export default Cartpage;
