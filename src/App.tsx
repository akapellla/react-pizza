import "./main.scss";
import { Routes, Route } from "react-router";

import Homepage from "./Pages/Homepage";
import Layout from "./components/Layout";
import Cartpage from "./Pages/Cartpage";
import NotFoundpage from "./Pages/NotFoundpage";
import FullPizzaPage from "./Pages/FullPizzaPage";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="cart" element={<Cartpage />} />
              <Route path="pizza/:id" element={<FullPizzaPage />} />
              <Route path="*" element={<NotFoundpage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
