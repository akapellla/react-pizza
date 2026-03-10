import { Link } from "react-router";
import styles from "./OrderSuccessPage.module.scss";

const OrderSuccessPage = () => {
  return (
    <section className={styles.order}>
      <h1 className={styles.title}>Ваш заказ успешно оформлен!</h1>
      <p className={styles.desc}>Спасибо, что выбрали нас! Мы вас не подведем😊</p>
      <Link to="/">
        <button className={styles.backButton}>Вернуться на главную</button>
      </Link>
    </section>
  );
};

export default OrderSuccessPage;
