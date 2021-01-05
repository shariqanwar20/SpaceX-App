import React from "react";
import "./App.css";
/* The following line can be included in your src/index.js or App.js file*/
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import Launches from "./components/Launches";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Launches />
    </div>
  );
}

export default App;
