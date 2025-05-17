import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

const App = () => {

  return (
    <div className="container p-5">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
