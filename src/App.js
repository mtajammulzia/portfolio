import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Techstack from "./components/techstack/Techstack";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter> */}

      <Navbar />
      <Home />
      <Techstack />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
