import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function Header() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div class="headerContainer">
      <div class="header_logo">
        <h1 className="logo">Div Or Span</h1>
      </div>
      <div class="header_menu">
        <Link to="/home" className="menu_item">
          Ana Sayfa
        </Link>
        <div className="dropdown">
          <button onClick={myFunction} class="dropbtn">
            Dersler ↓
          </button>
          <div id="myDropdown" class="dropdown-content">
            <Link class="dropdown-item" to="/csharp1">
              C#
            </Link>
            <Link class="dropdown-item" to="/java1">
              JavaScript
            </Link>
            <Link class="dropdown-item" to="/python1">
              Python
            </Link>
          </div>
        </div>
        <Link to="/about" className="menu_item">
          Hakkımızda
        </Link>
        <Link to="/about" className="menu_item">
          İletişim
        </Link>
      </div>
      <div class="header_text">
        <h5>
          <i>GELECEK YAZILIM İLE ŞEKİLLENECEK</i>
        </h5>
      </div>
    </div>
  );
}
export default Header;
