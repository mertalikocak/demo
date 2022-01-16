import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function Header() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); //dropdown yapan fonksiyon
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
    <div class="headerContainer sticky-top">
      {/* menüyü yapışık yapıyor */}
      <div class="header_logo">
        <Link to="/" className="logo">
          &lt;Div Or Span/&gt;
        </Link>
      </div>
      <div class="header_menu">
        <div class="menu_item1">
          <Link to="/" className="menu_item">
            {/* menü butonları */}
            Ana Sayfa
          </Link>
        </div>
        <div class="menu_item2">
          <span onClick={myFunction} class="dropbtn">
            {/* menü butonları */}
            Dersler ↓
          </span>
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
        <div class="menu_item3">
          <Link to="/about" className="menu_item">
            {/* menü butonları */}
            Hakkımızda
          </Link>
        </div>
        <div class="menu_item4">
          <Link to="/contact" className="menu_item">
            {/* menü butonları */}
            İletişim
          </Link>
        </div>
      </div>
      <div class="header_text">
        {/* slogan */}
        <p>
          <i>GELECEK YAZILIM İLE ŞEKİLLENECEK</i>
        </p>
      </div>
    </div>
  );
}
export default Header;
