import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

function Homepage() {
  return (
    <div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Homepage;
