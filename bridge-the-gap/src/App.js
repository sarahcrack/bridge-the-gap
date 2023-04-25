import { useState } from "react";
import "./App.css";
import ChooseCategory from "./components/ChooseCategory";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import DisplayResources from "./components/DisplayResources";
import ContributeResource from "./components/ContributeResource";

function App() {
  // create a resources state to pass down to DisplayResources
  const [resources, setResources] = useState([]);
  // create a function to update the resources state called handleContribution
  function handleContribution(contribution) {
    setResources([...resources, contribution]);
  }

  return (
    <div className="App">
      <ContributeResource onContribute={handleContribution}/>
      <DisplayResources resources={resources} />
    </div>
  );
}

export default App;
