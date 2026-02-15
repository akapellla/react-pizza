import styles from "./Toolbar.module.scss";

import Sort from "../Sort";

import React from "react";

const Toolbar = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <section className={styles.toolbar}>
      <nav className={styles.categories}>
        <ul className={styles.categoryList}>
          {categories.map((name, i) => {
            return (
              <li key={name} className={styles.categoriesItem}>
                <button
                  className={`${styles.categoriesBtn} ${activeIndex === i ? styles.active : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Sort />
    </section>
  );
};

export default Toolbar;
