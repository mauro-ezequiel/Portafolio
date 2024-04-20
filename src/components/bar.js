import { Link } from "react-router-dom";
import React from "react";
import style from "../style/bar.modules.css";

function Navbar() {
  console.log(style);
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary"
      aria-controls="responsive-navbar-nav"
      id="nav"
    >
      <div className="container-fluid">
        <Link className="navbar-brand m" to="/">
          Mauro Quispe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" id="bar">
              <Link className="navbar-brand " to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="navbar-brand " id="bar" to="/cv">
                curriculum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
