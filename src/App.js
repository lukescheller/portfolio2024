import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavBar from "./Components/CustomNavBar";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AE_Page from "./Components/AE_Page";
import PR_Page from "./Components/PR_Page";
import PS_Page from "./Components/PS_Page";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
