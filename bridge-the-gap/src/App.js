import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Contribute from "./pages/Contribute";
import Nav from "./pages/Nav";
import Display from "./pages/Display";
import ContributeResource from "./components/ContributeResource";
import DisplayResources from "./components/DisplayResources";
import "./App.css";
import ThankYou from "./components/ThankYou";
import Thanks from "./pages/Thanks";

function App() {
  // create a resources state to pass down to DisplayResources
  const [resources, setResources] = useState([
    {
      contributor: "Bim",
      category: "Design",
      title: "css tricks",
      description: "Handy cheatsheet for css",
      link: "css-tricks.com",
    },
    {
      contributor: "Paul",
      category: "Collaboration",
      title: "Trello",
      description:
        "create for writing to do lists as tickets for project managing",
      link: "trello.com",
    },
    {
      contributor: "Sarah",
      category: "Tutorials",
      title: "React tutorial for beginners",
      description: "React JS tutorials by Programming with Mosh",
      link: "https://youtu.be/SqcYOGIETPk",
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
            <Route path="/thank-you" element={<Thanks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
