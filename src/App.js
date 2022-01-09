import React from "react";
import Main from "./Components/main_component";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
