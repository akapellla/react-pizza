import "./main.scss";
import { Routes, Route } from "react-router";
import React from "react";
import Homepage from "./Pages/Homepage";
import Layout from "./components/Layout";
import OrderSuccessPage from "./Pages/OrderSuccessPage";

const Cartpage = React.lazy(() => import("./Pages/Cartpage"));
const NotFoundpage = React.lazy(() => import("./Pages/NotFoundpage"));
const FullPizzaPage = React.lazy(() => import("./Pages/FullPizzaPage"));

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path="cart"
                element={
                  <React.Suspense fallback={<div>Идет загрузка корзины...</div>}>
                    <Cartpage />
                  </React.Suspense>
                }
              />
              <Route
                path="pizza/:id"
                element={
                  <React.Suspense fallback={<div>Идет загрузка страницы товара...</div>}>
                    <FullPizzaPage />
                  </React.Suspense>
                }
              />
              <Route
                path="order-success"
                element={
                  <React.Suspense fallback={<div>Идет загрузка...</div>}>
                    <OrderSuccessPage />
                  </React.Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <React.Suspense fallback={<div>Идет загрузка страницы...</div>}>
                    <NotFoundpage />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
