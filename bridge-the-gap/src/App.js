import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Contribute from "./pages/Contribute";
import Nav from "./pages/Nav";
import ContributeResource from "./components/ContributeResource";
import DisplayResources from "./components/DisplayResources";

function App() {
  // create a resources state to pass down to DisplayResources
  const [resources, setResources] = useState([]);
  // create a function to update the resources state called handleContribution
  function handleContribution(contribution) {
    setResources([...resources, contribution]);
  }
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
      <ContributeResource onContribute={handleContribution} />
      {/* // pass down the handleContribution function to ContributeResource */}
      <DisplayResources resources={resources} />
    </div>
  );
}

export default App;
