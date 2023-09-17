import Nabar from "./components/bar";
import "./App.css";
import List from "./components/list";
import ParticlesApp from "./components/particlesApp";
import Project from "./components/project";
import Contact from "./components/contact";

export default function App() {
  return (
    <section className="dark" id="Home">
      <ParticlesApp />
      <Nabar />

      <header className="container">
        <h1 className="title">
          Mauro Quispe
          <h2 className="title__two">
            Web developer
            <h3 className="title__two-development">Front-end</h3>
          </h2>
        </h1>
      </header>
      <div className="body1"></div>
      <List />
      <Project />
      <Contact />

      <a href="https://wa.me/541150941389" id="btn" target="-blank">
        <i class="b bi-whatsapp" />
      </a>
    </section>
  );
}
