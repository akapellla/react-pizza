import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, imageUrl, price, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(Math.floor(sizes.length / 2.1));

  const typeNames = ["тонкое", "традиционное"];

  return (
    <article className={`${styles.card}`}>
      <div className={`${styles.pizzaInfo}`}>
        <img className={`${styles.pizzaImg}`} src={imageUrl} alt="" />
        <span>{title}</span>
      </div>
      <div className={`${styles.pizzaSettings}`}>
        <div className={`${styles.doughSettings}`}>
          {types.map((typeId, index) => (
            <button
              className={`${styles.settingsButton} ${activeType === typeId && styles.active}`}
              onClick={() => setActiveType(typeId)}
            >
              {typeNames[typeId]}
            </button>
          ))}
        </div>

        <ul className={`${styles.sizeSettings}`}>
          {sizes.map((value, index) => {
            return (
              <li key={value} className={styles.sizesLi}>
                <button
                  className={`${styles.settingsButton} ${activeSize === index && styles.active}`}
                  onClick={() => setActiveSize(index)}
                >
                  {value} см.
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`${styles.pizzaBottomDesc}`}>
        <p>от {price} руб.</p>
        <button>
          <svg
            className={`${styles.plusSvg}`}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </svg>
          Добавить
          <span className={`${styles.count}`}>10</span>
        </button>
      </div>
    </article>
  );
};

export default Card;
