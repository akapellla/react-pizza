import { useParams, useNavigate } from "react-router";
import React from "react";
import axios from "axios";

const FullPizzaPage: React.FC = () => {
  const [pizza, setPizza] = React.useState<Data>();
  const { id } = useParams();
  const navigate = useNavigate();

  type Data = {
    imageUrl: string;
    price: number;
    title: string;
  };

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://698b33a36c6f9ebe57bbf32b.mockapi.io/pizzaCatalog/${id}`
        );
        console.log(data);
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы: " + error);
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <section>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </section>
  );
};

export default FullPizzaPage;
