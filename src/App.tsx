import { useEffect, useState } from "react";
import "./App.css";
import { Skills, Portfolio, Contact, About, Header } from "./containers";

function App() {
  return (
    <div className="background h-full border-4 border-amber-900	">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="relative z-0">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
