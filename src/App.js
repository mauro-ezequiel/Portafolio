import Bar from "./components/bar";
import "./App.css";
import List from "./components/list";
import ParticlesApp from "./components/particlesApp";
import Project from "./components/project";
import Contact from "./components/contact";
import bw from "./img/bw.png";

export default function App() {
  return (
    <section className="dark">
      <Bar />

      <header className="container">
        <h1 className="title">
          Mauro Quispe
          <h2 className="title__two">
            Desarrollador web
            <h3 className="title__two-development">Front-end</h3>
          </h2>
        </h1>

        <div className="s">
          <h2 className=" h_informatico">
            <i className="b1  bi-calendar4-event" />
            20 Años
          </h2>

          <h2 className=" h_informatico">
            <i className="b1 bi-geo-alt" />
            ARGENTINA
          </h2>
        </div>
      </header>

      <List />

      <div className="trabajo">
        <div className="ca">
          <a href="https://playful-pony-f05ead.netlify.app/" target="-blank">
            <img className="image" src={bw} alt="pagina 3d" />
          </a>
        </div>

        <div id="text">
          <h1 className="title t">Trabajo FreeLancer </h1>
          <p className="t">
            Página donde podrás comprar diferentes productos y realizar pedidos.
            Está vinculado a las diferentes redes del fabricante y también a
            "mercado libre" para que los pedidos lleguen a todas partes de
            Argentina.
          </p>

          <div className="  t badges-container">
            <span className="badge text-bg-primary">React</span>
            <span className="badge text-bg-primary">vite</span>
            <span className="badge text-bg-primary">javascript</span>
            <span className="badge text-bg-primary">bootstrap</span>
            <span className="badge text-bg-primary">css</span>
            <span className="badge text-bg-primary">html</span>
          </div>

          <br />
          <div className="icon_trabajo">
            <a
              href="https://github.com/mauro-ezequiel/black-wolf"
              target="-blank"
            >
              <i class="git   bi-github"></i>
            </a>
            <a href="https://playful-pony-f05ead.netlify.app/" target="-blank">
              <i class="git  bi-laptop"></i>
            </a>
          </div>
        </div>
      </div>
      <Project />
      <Contact />

      <a href="https://wa.me/541150941389" id="btn" target="-blank">
        <i class=" bi-whatsapp" />
      </a>
    </section>
  );
}
