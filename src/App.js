import React from "react";
import Main from "./Components/main_component";
import { BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
