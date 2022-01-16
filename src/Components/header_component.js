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
        <Link to="/" className="logo">
          &lt;Div Or Span/&gt;
        </Link>
      </div>
      <div class="header_menu">
        <Link to="/" className="menu_item">
          Ana Sayfa
        </Link>
        <div className="dropdown">
          <button onClick={myFunction} class="dropbtn">
            Dersler ↓
          </button>
          <div id="myDropdown" class="dropdown-content">
            <Link class="dropdown-item" to="/course/cs">
              C#
            </Link>
            <Link class="dropdown-item" to="/course/js">
              JavaScript
            </Link>
            <Link class="dropdown-item" to="/course/py">
              Python
            </Link>
          </div>
        </div>
        <Link to="/about" className="menu_item">
          Hakkımızda
        </Link>
        <Link to="/contact" className="menu_item">
          İletişim
        </Link>
      </div>
      <div class="header_text">
        <p>
          <i>GELECEK YAZILIM İLE ŞEKİLLENECEK</i>
        </p>
      </div>
    </div>
  );
}
export default Header;
