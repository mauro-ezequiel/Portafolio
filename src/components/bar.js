import React from "react";
import style from "../style/bar.modules.css";

function Navbar() {
  console.log(style);
  return (
    <div className="bar">
      <nav class="navbar navbar-expand-md  ">
        <div class="container-fluid">
          <a className="navbar-brand" href="#a">
            Mauro Quispe
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-toggler">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
