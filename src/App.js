import Bar from "./components/bar";
import "./App.css";
import List from "./components/list";
import ParticlesApp from "./components/particlesApp";
import Project from "./components/project";
import Contact from "./components/contact";

export default function App() {
  return (
    <section className="dark">
      <ParticlesApp />
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
          <h2 className=" h">
            <i className="b1  bi-calendar4-event" />
            20 Años
          </h2>

          <h2 className=" h">
            <i className="b1 bi-geo-alt" />
            ARGENTINA
          </h2>
        </div>
      </header>

      <List />
      <Project />
      <Contact />

      <a href="https://wa.me/541150941389" id="btn" target="-blank">
        <i class="b bi-whatsapp" />
      </a>
    </section>
  );
}
