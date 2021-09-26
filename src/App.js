import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Techstack from "./components/techstack/Techstack";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Techstack />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
