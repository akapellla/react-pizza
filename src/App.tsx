import "./main.scss";
import React from "react";

import Homepage from "./Pages/Homepage";
// import axios from "axios";

function App() {
  // const [pizzaCatalog, setPizzaCatalog] = React.useState([]);

  React.useEffect(() => {
    // async function fetchData() {
    //   await axios.get("catalog").then((res) => setPizzaCatalog(res.data));
    // }
    // fetchData();
  }, []);
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
