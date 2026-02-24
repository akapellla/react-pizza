import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";

import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";
import Pagination from "../../components/Pagination";

import styles from "./Homepage.module.scss";

import "./Homepage.module.scss";

const Homepage = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const [sortDirection, setSortDirection] = React.useState("asc");
  const [pizzaCatalog, setPizzaCatalog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://698b33a36c6f9ebe57bbf32b.mockapi.io/pizzaCatalog?page=${currentPage}&limit=4${!categoryId ? `&sortBy=${sort.sortProperty}&order=${sortDirection}&search=${inputValue}` : `&category=${categoryId}&sortBy=${sort.sortProperty}&order=${sortDirection}&search=${inputValue}`}`
      );

      setPizzaCatalog(data);
    } catch (err) {
      const status = err?.response?.status;

      if (status === 404) {
        setPizzaCatalog([]);
      } else {
        console.log("реально ошибка");
        setError("Не удалось загрузить пиццы");
        setPizzaCatalog([]);
        console.error(err);
      }
    } finally {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [categoryId, sort.sortProperty, sortDirection, inputValue, currentPage]);

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
        <div className="cards">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : pizzaCatalog.map((value) => <Card key={value.id} {...value} />)}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </section>
    </>
  );
};

export default Homepage;
