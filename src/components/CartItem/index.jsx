import styles from "./CartItem.module.scss";

const CartItem = ({ title }) => {
  return (
    <article className={styles.itemSec}>
      <div className={styles.itemInfo}>
        <img
          src="https://media.dodostatic.net/image/r:292x292/019ac20b311478aca7173b34234cfe4f.avif"
          alt=""
        />
        <div className={styles.itemInfoDesc}>
          <h2>{title}</h2>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>

      <div className={styles.itemCounter}>
        <button>
          <img src="/icons/minusLogo.png" alt="" />
        </button>
        <p>2</p>
        <button>
          <img src="/icons/plusLogo.png" alt="" />
        </button>
      </div>

      <div className={styles.itemPrice}>
        <p>770 ₽</p>
      </div>

      <div className={styles.itemClose}>
        <button>
          <img src="/icons/closeLogo.png" alt="" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
