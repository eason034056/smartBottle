import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import "./styles.css";

const FirstPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <Team />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default FirstPage;
