import styles from "./Sort.module.scss";

import React from "react";

const Sort = () => {
  const sortType = ["популярности", "цене", "алфавиту"];

  const [isVisible, setIsVisible] = React.useState(false);
  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);

  const onChangeType = (index) => {
    setActiveTypeIndex(index);
    setIsVisible(false);
  };

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
        {sortType[activeTypeIndex]}
      </button>

      <ul className={`${styles.sortList} ${isVisible ? styles.visible : ""}`}>
        {sortType.map((value, index) => (
          <li
            className={`${styles.sortOption} ${activeTypeIndex === index ? styles.active : ""}`}
            onClick={() => onChangeType(index)}
          >
            <button className={styles.sortBtn}>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
