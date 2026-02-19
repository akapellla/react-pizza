import styles from "./Toolbar.module.scss";

import Sort from "../Sort";

import React from "react";

const Toolbar = ({
  sortDirection,
  setSortDirection,
  activeCategoryIndex,
  setActiveCategoryIndex,
  activeTypeSort,
  setActiveTypeSort,
}) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  return (
    <section className={styles.toolbar}>
      <nav className={styles.categories}>
        <ul className={styles.categoryList}>
          {categories.map((name, i) => {
            return (
              <li key={name} className={styles.categoriesItem}>
                <button
                  className={`${styles.categoriesBtn} ${activeCategoryIndex === i ? styles.active : ""}`}
                  onClick={() => setActiveCategoryIndex(i)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <Sort
        activeTypeSort={activeTypeSort}
        setActiveTypeSort={setActiveTypeSort}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      />
    </section>
  );
};

export default Toolbar;
