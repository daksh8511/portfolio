import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Footer from "./Components/Footer/Footer";

const App = () => {

  return (
    <div className="container p-5 overflow-hidden">
      <Hero />
      <About />
      <Skill />
      <WorkExperience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
