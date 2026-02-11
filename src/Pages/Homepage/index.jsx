import Header from "../../components/Header";
import Toolbar from "../../components/Toolbar";
import Card from "../../components/Card";

import "./Homepage.module.scss";

const Homepage = () => {
  const pizzas = [
    {
      id: 0,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac20b311478aca7173b34234cfe4f.avif",
      title: "Пепперони",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 18.9,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac1f1645c726cbf3fb3a402d53e1b.avif",
      title: "Бефстроганов",
      types: [0],
      sizes: [26, 40],
      price: 26.9,
      category: 0,
      rating: 6,
    },
    {
      id: 2,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac21107f777a1bd7ba6c220373cda.avif",
      title: "Чилл Грилл",
      types: [0],
      sizes: [26, 40],
      price: 22.3,
      category: 1,
      rating: 4,
    },
    {
      id: 3,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac65bb69c7364a9eb4d843a39008e.avif",
      title: "Деревенская",
      types: [1],
      sizes: [26, 30, 40],
      price: 25.3,
      category: 2,
      rating: 2,
    },
    {
      id: 4,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac65a514673fc8d4d6cd50e70bd7b.avif",
      title: "Домашняя",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 27,
      category: 3,
      rating: 8,
    },
    {
      id: 5,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac211f0fb7763b59205265e5ac19e.avif",
      title: "Сырная",
      types: [0],
      sizes: [30, 40],
      price: 23.3,
      category: 2,
      rating: 2,
    },
    {
      id: 6,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac655f0e57593bd51eb6cdfaabd88.avif",
      title: "Ветчина и огурчики",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 22.3,
      category: 1,
      rating: 9,
    },
    {
      id: 7,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac1f5e20d70cb8dcd6c8ce9ce6c71.avif",
      title: "Ветчина и сыр",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 24.1,
      category: 4,
      rating: 10,
    },
    {
      id: 8,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac216373f717283638088763effe2.avif",
      title: "Сырный цыпленок",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 24.7,
      category: 5,
      rating: 10,
    },
    {
      id: 9,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019ac21333f078c6bd6c587e2caa20ae.avif",
      title: "Цыпленок барбекю",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 24.9,
      category: 5,
      rating: 7,
    },
  ];

  return (
    <>
      <Header></Header>
      <main>
        <Toolbar></Toolbar>
        <h1>Все пиццы</h1>
        <div className="cards">
          {pizzas.map((value) => (
            <Card {...value} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Homepage;
