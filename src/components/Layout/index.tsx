import React from "react";

import { Outlet, useLocation } from "react-router";
import Header from "../Header";

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const isCartPage = pathname === "/cart";

  return (
    <>
      <Header showCart={!isCartPage} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
