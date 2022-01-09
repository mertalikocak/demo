import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
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
                  <a class="dropdown-item" href="#">
                    <Link className="menu_link_drop" to="#">
                      C#
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <Link className="menu_link_drop" to="#">
                      Java
                    </Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <Link className="menu_link_drop" to="#">
                      Python
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
