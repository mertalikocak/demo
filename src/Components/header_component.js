import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div id="head1">
      <span id="head_logo">
        <img src={require("./huge.png")} alt="site.logo" id="logo" />
      </span>
      <span id="head_menu">
        <span className="menuItem">
          <Link to="./HomeComponent.js" className="menuLink">
            Ana Sayfa
          </Link>
        </span>
        <span className="menuItem">
          <Link to="/languages" className="menuLink">
            Diller
          </Link>
        </span>
        <span className="menuItem">
          <Link to="/about" className="menuLink">
            Hakkımızda
          </Link>
        </span>
      </span>
    </div>
  );
}
export default Header;
