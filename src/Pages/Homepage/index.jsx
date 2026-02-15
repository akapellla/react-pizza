import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";

import "./Homepage.module.scss";
import React from "react";
import axios from "axios";

import Skeleton from "../../components/Card/Skeleton";

const Homepage = () => {
  const [pizzaCatalog, setPizzaCatalog] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async () => {
    await axios
      .get("https://698b33a36c6f9ebe57bbf32b.mockapi.io/pizzaCatalog")
      .then((res) => setPizzaCatalog(res.data));
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <main>
        <Toolbar></Toolbar>
        <h1>Все пиццы</h1>
        <div className="cards">
          {isLoading
            ? [...new Array(6)].map(() => <Skeleton />)
            : pizzaCatalog?.map((value) => <Card {...value} />)}
        </div>
      </main>
    </>
  );
};

export default Homepage;
