// src/component/AnimatedBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#ff0055", "#00c4ff", "#ffd700"], // premium glow colors
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: { enable: true, minimumValue: 0.1 },
            animation: {
              enable: true,
              speed: 1.2,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 6 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 2,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;
