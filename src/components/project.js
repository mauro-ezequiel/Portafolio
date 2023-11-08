import React from "react";
import Card from "./props";

import style from "../style/project.modules.css";
import calcu from "../img/calcu.png";
import cell from "../img/cell.png";
import click from "../img/click.png";
import txt from "../img/txt.png";
import venta from "../img/venta.png";

function Project() {
  console.log(style);

  return (
    <section className="dark x">
      <h1 className="title" id="Project">
        {" "}
        project
      </h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <Card img={venta} t="basic calculations calculator" />
            <div id="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 b bi-github"></i>
              </a>
              <a
                href="https://chic-duckanoo-84fd3a.netlify.app/"
                target="-blank"
              >
                <i class="be b bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4"></div>

        <div className="col-lg-4">
          <div className="card">
            <Card img={cell} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 b bi-github"></i>
              </a>
              <a
                href="https://earnest-pothos-6d3821.netlify.app/"
                target="-blank"
              >
                <i class="be  b bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title"> exercise</h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <Card img={calcu} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 b bi-github"></i>
              </a>
              <a
                href="https://frabjous-stroopwafel-f50188.netlify.app/"
                target="-blank"
              >
                <i class="be b bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card img={click} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 b bi-github"></i>
              </a>
              <a
                href="https://frolicking-frangollo-bea818.netlify.app/"
                target="-blank"
              >
                <i class="be b bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card img={txt} />

            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 b bi-github"></i>
              </a>
              <a
                href="https://charming-bavarois-0c6102.netlify.app/"
                target="-blank"
              >
                <i class="be b bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
