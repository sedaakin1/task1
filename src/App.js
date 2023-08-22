import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-primary">
          <Sidebar />
        </div>
        <div className="col-9 p-0">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
