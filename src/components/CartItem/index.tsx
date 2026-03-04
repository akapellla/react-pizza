import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { addItem, removeItem, minusItem, type CartItem } from "../../redux/slices/cartSlice";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
};

const CartItem = ({ id, title, price, imageUrl, size, type, count }: CartItemProps) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <article className={styles.itemSec}>
      <div className={styles.itemInfo}>
        <img src={imageUrl} alt="" />
        <div className={styles.itemInfoDesc}>
          <h2>{title}</h2>
          <p>
            {type} тесто, {size} см.
          </p>
        </div>
      </div>

      <div className={styles.itemCounter}>
        <button onClick={onClickMinus}>
          <img src="/icons/minusLogo.png" alt="" />
        </button>
        <p>{count}</p>
        <button onClick={onClickPlus}>
          <img src="/icons/plusLogo.png" alt="" />
        </button>
      </div>

      <div className={styles.itemPrice}>
        <p>{(price * count).toFixed(2)} руб.</p>
      </div>

      <div className={styles.itemClose}>
        <button onClick={onClickRemove}>
          <img src="/icons/closeLogo.png" alt="" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
