import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Contribute from "./pages/Contribute";
import Nav from "./pages/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Nav />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/choose" element={<Choose />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
