import styles from "./Sort.module.scss";

import React from "react";

const Sort = ({ activeTypeSort, setActiveTypeSort, sortDirection, setSortDirection }) => {
  const sortType = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const [isVisible, setIsVisible] = React.useState(false);

  const onChangeSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? (prev = "desc") : (prev = "asc")));
  };

  const onChangeType = (obj) => {
    setActiveTypeSort(obj);
    setIsVisible(false);
  };

  return (
    <div className={`${styles.sort}`}>
      <div className={`${styles.sortLabel}`}>
        <img
          onClick={onChangeSortDirection}
          className={`${styles.sortIcon}`}
          src={sortDirection === "asc" ? "/icons/ascSortIcon.svg" : "/icons/descSortIcon.svg"}
          alt=""
        />
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
        {activeTypeSort.name}
      </button>

      <ul className={`${styles.sortList} ${isVisible ? styles.visible : ""}`}>
        {sortType.map((value, index) => (
          <li
            className={`${styles.sortOption} ${activeTypeSort.sortProperty === value.sortProperty ? styles.active : ""}`}
            onClick={() => onChangeType(value)}
          >
            <button className={styles.sortBtn}>{value.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
