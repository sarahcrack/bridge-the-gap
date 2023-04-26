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
  const [resources, setResources] = useState([{contributor:'bim',
  category: 'Design',
  title: 'css tricks',
  description: 'handy cheatsheet for css',
  link: 'css-tricks.com'
   }, {
    contributor:'paul',
    category: 'Collaboration',
    title: 'trello',
    description: 'create for writing to do lists as tickets for project managing',
    link: 'trello.com'
  }, {
    contributor:'sarah',
    category: 'Tutorial',
    title: 'react tutorial for beginners',
    description: 'react JS tutorials by Programming with Mosh',
    link: 'https://youtu.be/SqcYOGIETPk'
  }
  ]);


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
