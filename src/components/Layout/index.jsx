import { Outlet, useLocation } from "react-router";
import Header from "../Header";

const Layout = ({ inputValue, setInputValue }) => {
  const { pathname } = useLocation();

  const isCartPage = pathname === "/cart";

  return (
    <>
      <Header showCart={!isCartPage} inputValue={inputValue} setInputValue={setInputValue} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
