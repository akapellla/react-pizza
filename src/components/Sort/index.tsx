import styles from "./Sort.module.scss";

import { useSelector, useDispatch } from "react-redux";

import { setSort } from "../../redux/slices/filter/slice";

import React from "react";
import type { RootState } from "../../redux/store";
import type { SortType } from "../../redux/slices/filter/slice";

const sortType: SortType[] = [
  { name: "популярности", sortProperty: "rating" },
  { name: "цене", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "title" },
];

type SortProps = {
  sortDirection: string;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
};

const Sort = ({ sortDirection, setSortDirection }: SortProps) => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);

  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = React.useState(false);

  const onChangeSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? (prev = "desc") : (prev = "asc")));
  };

  const onChangeType = (obj: SortType) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutisde = (event: MouseEvent) => {
      if (!sortRef.current) {
        return;
      }
      if (!event.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutisde);

    return () => {
      document.body.removeEventListener("click", handleClickOutisde);
    };
  }, []);

  return (
    <div ref={sortRef} className={`${styles.sort}`}>
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
        {sort.name}
      </button>

      <ul className={`${styles.sortList} ${isVisible ? styles.visible : ""}`}>
        {sortType.map((value) => (
          <li
            className={`${styles.sortOption} ${sort.sortProperty === value.sortProperty ? styles.active : ""}`}
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
