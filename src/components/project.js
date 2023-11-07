import React from "react";
import Card from "./props";
import Pages from "../img/pages.png";
import style from "../style/project.modules.css";
import venta from "../video/venta.mp4";
import calcu from "../video/calcu.mp4";
import cell from "../video/cell.mp4";
import click from "../video/click.mp4";
import txt from "../video/txt.mp4";

function Project() {
  console.log(style);

  return (
    <section className="dark">
      <h1 className="title" id="Project">
        {" "}
        project
      </h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <Card mp4={venta} />
            <div id="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a
                href="https://chic-duckanoo-84fd3a.netlify.app/"
                target="-blank"
              >
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card mp4={cell} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a
                href="https://earnest-pothos-6d3821.netlify.app/"
                target="-blank"
              >
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card />

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
        <div className="col-lg-4">
          <div className="card">
            <Card mp4={calcu} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a
                href="https://frabjous-stroopwafel-f50188.netlify.app/"
                target="-blank"
              >
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card mp4={click} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a
                href="https://frolicking-frangollo-bea818.netlify.app/"
                target="-blank"
              >
                <i class="be bi-laptop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <Card mp4={txt} />
            <div className="cap">
              <h2 className="sub">briefcase</h2>
              <a href="https://github.com/mauro-ezequiel" target="-blank">
                <i class="be5 bi-github"></i>
              </a>
              <a
                href="https://charming-bavarois-0c6102.netlify.app/"
                target="-blank"
              >
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
