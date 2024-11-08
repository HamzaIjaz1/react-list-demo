import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SubdivisionDisplay } from "./components/subdivisions-display/SubdivisionDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <SubdivisionDisplay />
    </div>
  );
}

export default App;
