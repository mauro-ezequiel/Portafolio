import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./particlesConfig";

const ParticlesApp = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div>
      <Particles options={ParticlesConfig} init={particlesInit} />
    </div>
  );
};

export default ParticlesApp;
