import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NavBar from "../tools/NavBar";

function Header() {
  return (
    <div className="layerHeader">
      <div class="headerContainer">
        <div class="header_logo">
          <img
            src={require("../img/logo.png")}
            class="rounded-circle"
            alt="site logo"
            width="80%"
          />
        </div>
        <div className="header_empty"></div>
        <div class="header_navbar">
          <NavBar></NavBar>
        </div>
      </div>
    </div>
  );
}
export default Header;
