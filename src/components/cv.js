import Bar from "./bar";
import ParticlesApp from "./particlesApp";
import Contact from "./contact";
import cv from "../img/cv.jpg";

export function Cv() {
  return (
    <>
      <section className="dark ">
        <Bar />
        <ParticlesApp />

        <h1 className="tit title">CURRICULUM</h1>

        <div className="cv">
          <img className="cv" src={cv} alt="curriculum" />
        </div>
        <Contact />
      </section>
    </>
  );
}
