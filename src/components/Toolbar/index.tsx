import styles from "./Toolbar.module.scss";
import Sort from "../Sort";
import React from "react";

type ToolbarProps = {
  sortDirection: string;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
  activeCategoryIndex: number;
  setActiveCategoryIndex: (id: number) => void;
};

const Toolbar = ({
  sortDirection,
  setSortDirection,
  activeCategoryIndex,
  setActiveCategoryIndex,
}: ToolbarProps) => {
  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
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
      <Sort sortDirection={sortDirection} setSortDirection={setSortDirection} />
    </section>
  );
};

export default Toolbar;
