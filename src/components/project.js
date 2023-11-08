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
          <div className="car">
            <Card
              img={venta}
              t="shopping app (using an API). with search and pagination"
            />
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
              <div className="badges-container">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">vite</span>
                <span className="badge text-bg-primary">javascript</span>
                <span className="badge text-bg-primary">bootstrap</span>
                <span className="badge text-bg-primary">css</span>
                <span className="badge text-bg-primary">html</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4"></div>

        <div className="col-lg-4">
          <div className="car">
            <Card
              img={cell}
              t="cell phone sales and repair app, with react router"
            />
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
              <div className="badges-container">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">javascript</span>
                <span className="badge text-bg-primary">bootstrap</span>
                <span className="badge text-bg-primary">css</span>
                <span className="badge text-bg-primary">html</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="title"> exercise</h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="car">
            <Card img={calcu} t="basic calculations calculator" />
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
              <div className="badges-container">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">javascript</span>
                <span className="badge text-bg-primary">css</span>
                <span className="badge text-bg-primary">html</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="car">
            <Card img={click} t="click counter, exercise with useState hook" />
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
              <div className="badges-container">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">javascript</span>
                <span className="badge text-bg-primary">css</span>
                <span className="badge text-bg-primary">html</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="car">
            <Card img={txt} t="page replica" />

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
              <div className="badges-container">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-primary">javascript</span>
                <span className="badge text-bg-primary">css</span>
                <span className="badge text-bg-primary">html</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
