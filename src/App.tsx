import "./main.scss";
import { Routes, Route } from "react-router";
import * as React from "react";

import Homepage from "./Pages/Homepage";
import Layout from "./components/Layout";
import Cartpage from "./Pages/Cartpage";
import NotFoundpage from "./Pages/NotFoundpage";

function App() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Layout inputValue={inputValue} setInputValue={setInputValue} />}
            >
              <Route
                index
                element={<Homepage inputValue={inputValue} setInputValue={setInputValue} />}
              />
              <Route path="cart" element={<Cartpage />} />
              <Route path="*" element={<NotFoundpage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
