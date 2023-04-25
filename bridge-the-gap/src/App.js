import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Contribute from "./pages/Contribute";
import Nav from "./pages/Nav";
import Display from "./pages/Display";

function App() {
  const [resources, setResources] = useState([
    {
      contributor: "contributor name",
      category: "Coding",
      title: "title",
      description: "a hard coded initial entry for testing",
      link: "link",
    },
  ]);

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
            <Route
              path="/display"
              element={<Display resources={resources} />}
            />
            <Route
              path="/contribute"
              element={
                <Contribute resources={resources} setResources={setResources} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
