import React from "react";

import { useSelector } from "react-redux";

import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import { fetchPizzas } from "../../redux/slices/pizzaSlice";

import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Pagination from "../../components/Pagination";

import styles from "./Homepage.module.scss";

import "./Homepage.module.scss";
import { useAppDispatch, type RootState } from "../../redux/store";

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );
  const { items, status } = useSelector((state: RootState) => state.pizza);
  console.log(items);
  const [sortDirection, setSortDirection] = React.useState("asc");

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch(
        fetchPizzas({
          currentPage,
          sort,
          sortDirection,
          searchValue,
          categoryId,
        })
      );
      window.scroll(0, 0);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, sortDirection, searchValue, currentPage]);

  return (
    <>
      <section>
        <Toolbar
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          activeCategoryIndex={categoryId}
          setActiveCategoryIndex={onChangeCategory}
        ></Toolbar>
        <h1 className={styles.title}>Все пиццы</h1>

        {status === "error" ? (
          <div className={styles.contentError}>
            <h2>Произошла ошибка😢</h2>
            <p>К сожалению, сегодня без пицц</p>
          </div>
        ) : (
          <div className={styles.cards}>
            {status === "loading"
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : items?.map((value) => <Card key={value.id} {...value} />)}
          </div>
        )}

        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </section>
    </>
  );
};

export default Homepage;
