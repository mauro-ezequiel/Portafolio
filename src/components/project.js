import React from "react";
import Card from "./props";
import Pages from "../img/pages.png";
import style from "../style/project.modules.css";

function Project() {
  console.log(style);

  return (
    <section className="dark">
      <h1 className="title"> project</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div id="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title"> exercise</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Card image={Pages} alt="briefcase" />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a href="https://github.com/mauro-ezequiel">
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
