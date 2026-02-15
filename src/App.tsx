import "./main.scss";
import React from "react";

import Homepage from "./Pages/Homepage";
// import axios from "axios";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Homepage />
        </div>
      </div>
    </div>
  );
}

export default App;
