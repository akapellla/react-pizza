import styles from "./Header.module.scss";

import Logo from "../Logo";
import Cart from "../Cart";
import Search from "../Search";

type HeaderProps = {
  showCart: boolean;
};

const Header = ({ showCart = true }: HeaderProps) => {
  return (
    <>
      <header className={`${styles.header}`}>
        <div className={styles.leftHeader}>
          <Logo />
          {showCart && <Search />}
        </div>
        {showCart && <Cart />}
      </header>
    </>
  );
};

export default Header;
