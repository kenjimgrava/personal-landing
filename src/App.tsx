import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="background h-full border-4 border-amber-900	">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="relative z-0">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
