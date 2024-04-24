import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Documents from "./Documents"; // 确保你已经创建了这个组件
import Navbar from "./components/Navbar";
import Needfinding from "./Needfinding";
import ConceptVideo from "./ConceptVideo";
import VideoStoryboard from "./VideoStoryboard";
import Pov from "./Pov.jsx";
import "./styles.css";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/concept-video" element={<ConceptVideo />} />
          <Route path="/video-storyboard" element={<VideoStoryboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/needfinding" element={<Needfinding />} />
          <Route path="/pov-and-experience-prototypes" element={<Pov />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;