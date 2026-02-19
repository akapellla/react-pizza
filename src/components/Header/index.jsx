import styles from "./Header.module.scss";

import Logo from "../Logo";
import Cart from "../Cart";
import Search from "../Search";

const Header = ({ showCart = true, inputValue, setInputValue }) => {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.leftHeader}>
          <Logo />
          {showCart && <Search inputValue={inputValue} setInputValue={setInputValue} />}
        </div>
        {showCart && <Cart />}
      </header>
    </>
  );
};

export default Header;
