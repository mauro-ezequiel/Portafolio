import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./particlesConfig";
import "../style/bar.modules.css";
const ParticlesApp = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <>
      <div id="particles">
        <Particles options={ParticlesConfig} init={particlesInit} />
      </div>
    </>
  );
};

export default ParticlesApp;
