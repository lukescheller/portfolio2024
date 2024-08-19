import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavBar from "./Components/CustomNavBar";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AE_Page from "./Components/AE_Page";
import PR_Page from "./Components/PR_Page";
import PS_Page from "./Components/PS_Page";
import ID_Page from "./Components/ID_Page";
import Logo_Page from "./Components/Logo_Page";
import Clothing_Page from "./Components/Clothing_Page";
import Drawing_Page from "./Components/Drawing_Page";
// import Pokedex from "./Components/Pokedex";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavBar />
        <Routes>
          <Route exact path="/portfolio2024" element={<Home />} />
          <Route exact path="/aftereffects" element={<AE_Page />} />
          <Route exact path="/premierepro" element={<PR_Page />} />
          <Route exact path="/photoshop" element={<PS_Page />} />
          <Route exact path="/indesign" element={<ID_Page />} />
          <Route exact path="/logos" element={<Logo_Page />} />
          <Route exact path="/clothing" element={<Clothing_Page />} />
          <Route exact path="/drawing" element={<Drawing_Page />} />
          {/* <Route exact path="/pokemon" element={<Pokedex />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
