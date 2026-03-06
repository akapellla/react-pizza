import styles from "./NotFoundpage.module.scss";

const NotFoundpage = () => {
  return (
    <section className={styles.notFound}>
      <h2 className={styles.main}>страница не найдена(</h2>
      <p className={styles.desc}>Увидимся в другом месте</p>
    </section>
  );
};

export default NotFoundpage;
