import React from "react";
import style from "../style/project.modules.css";

import tarea from "../img/tarea.png";
import calcu from "../img/calcu.png";
import cell from "../img/cell.png";
import click from "../img/click.png";
import txt from "../img/txt.png";
import venta from "../img/venta.png";

function Project() {
  console.log(style);

  return (
    <section className="dark x">
      <h1 className="title">PROYECTO</h1>
      <div id="container_grid">
        <div id="grid">
          <div className="car">
            <div className="card">
              <a
                href="https://capable-zuccutto-3cb850.netlify.app/"
                target="-blank"
              >
                <img src={tarea} className="card-img-top" alt="22" />
              </a>

              <div className="card-body">
                <h5 className="card-title">Anotador de tareas</h5>
                <p className="card-text">
                  Se colocan tareas y tiene un botón para eliminar, agregar y
                  dejarla como tarea pendiente.
                </p>

                <br />
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="car">
            <div className="card">
              <a
                href="https://chic-duckanoo-84fd3a.netlify.app/"
                target="-blank"
              >
                <img src={venta} className="card-img-top" alt="22" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Ecomerce de productos</h5>
                <p className="card-text">
                  Aquí descomprimi una API y coloqué un buscador con filtro y
                  paginación.
                </p>
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="car">
            <div className="card">
              <a
                href="https://frabjous-stroopwafel-f50188.netlify.app/"
                target="-blank"
              >
                <img src={calcu} className="card-img-top" alt="22" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Calculadora</h5>
                <p className="card-text">calculadora de uso simple</p>
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="car">
            <div className="card">
              <a
                href="https://earnest-pothos-6d3821.netlify.app/"
                target="-blank"
              >
                <img src={cell} className="card-img-top" alt="22" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Arreglo y venta de celulares</h5>
                <p className="card-text">
                  Aquí puedes contactarnos para darnos detalles de tu situación
                  con tu celular. y puedes comprar otros celulares y accesorios
                </p>
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="car">
            <div className="card">
              <a
                href="https://frolicking-frangollo-bea818.netlify.app"
                target="-blank"
              >
                <img src={click} className="card-img-top" alt="22" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Contador de click</h5>
                <p className="card-text">1er uso de estados que e aplicado</p>
                <br />
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="car">
            <div className="card">
              <a
                href="https://charming-bavarois-0c6102.netlify.app/"
                target="-blank"
              >
                <img src={txt} className="card-img-top" alt="22" />
              </a>
              <div className="card-body">
                <h5 className="card-title">1er pagina</h5>
                <p className="card-text">html y css.</p>
                <a
                  href="https://github.com/mauro-ezequiel/black-wolf"
                  target="-blank"
                >
                  <i class="proyect_icon   b bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
