import styles from "./Sort.module.scss";

import React from "react";

const Sort = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
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
        onClick={() => setIsVisible((prev) => !prev)}
      >
        популярности
      </button>

      <ul className={`${styles.sortList} ${isVisible && styles.visible}`}>
        <li className={styles.sortOption}>
          <button className={styles.sortBtn}>популярности</button>
        </li>
        <li className={styles.sortOption}>
          <button className={styles.sortBtn}>по цене</button>
        </li>
        <li className={styles.sortOption}>
          <button className={styles.sortBtn}>по алфавиту</button>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
