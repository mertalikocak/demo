import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid navbardiv">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active">
                <Link className="menu_link" to="/home">
                  Anasayfa
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link className="menu_link" to="/about">
                  Hakkımızda
                </Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Diller
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to="/csharp">
                    C#
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/java">
                    Java
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/python">
                    Python
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <span class="navbar-text menu_text">
            Gelecek Yazılımla Şekillenecek
          </span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
