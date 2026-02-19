import React from "react";
import axios from "axios";

import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";
import Skeleton from "../../components/Card/Skeleton";

import styles from "./Homepage.module.scss";

import "./Homepage.module.scss";

const Homepage = ({ inputValue, setInputValue }) => {
  const [sortDirection, setSortDirection] = React.useState("asc");
  const [pizzaCatalog, setPizzaCatalog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategoryIndex, setActiveCategoryIndex] = React.useState(0);
  const [error, setError] = React.useState(null);

  const [activeTypeSort, setActiveTypeSort] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://698b33a36c6f9ebe57bbf32b.mockapi.io/pizzaCatalog${!activeCategoryIndex ? `?sortBy=${activeTypeSort.sortProperty}&order=${sortDirection}` : `?category=${activeCategoryIndex}&sortBy=${activeTypeSort.sortProperty}&order=${sortDirection}`}`
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
  }, [activeCategoryIndex, activeTypeSort, sortDirection]);

  return (
    <>
      <section>
        <Toolbar
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          activeCategoryIndex={activeCategoryIndex}
          setActiveCategoryIndex={(i) => setActiveCategoryIndex(i)}
          activeTypeSort={activeTypeSort}
          setActiveTypeSort={(obj) => setActiveTypeSort(obj)}
        ></Toolbar>
        <h1 className={styles.title}>Все пиццы</h1>
        <div className="cards">
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : pizzaCatalog
                ?.filter((obj) => obj.title.toLowerCase().includes(inputValue.toLowerCase()))
                .map((value) => <Card key={value.id} {...value} />)}
        </div>
      </section>
    </>
  );
};

export default Homepage;
