import Nabar from "./components/bar";
import "./App.css";
import List from "./components/list";

export default function App() {
  return (
    <section className="dark">
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
      <div className="body1">
        <List />
      </div>
    </section>
  );
}
