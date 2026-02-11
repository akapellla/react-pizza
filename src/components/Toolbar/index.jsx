import styles from "./Toolbar.module.scss";
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
                  className={`${styles.categoriesBtn} ${activeIndex === i && styles.active}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`${styles.sort}`}>
        <div className={`${styles.sortLabel}`}>
          <img className={`${styles.sortIcon}`} src="/icons/sortIcon.svg" alt="" />
          <span className={`${styles.sortDesc}`}>Сортировка по:</span>
        </div>

        <button
          className={`${styles.sortTrigger}`}
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-controls="sort-list"
        >
          популярности
        </button>

        <ul className="sort__list">
          <li className="sort__option">популярности</li>
          <li className="sort__option">цене</li>
          <li className="sort__option">алфавиту</li>
        </ul>
      </div>
    </section>
  );
};

export default Toolbar;
