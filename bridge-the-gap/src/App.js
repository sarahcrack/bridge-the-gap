import "./App.css";
import ChooseCategory from "./components/ChooseCategory";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import DisplayResources from "./components/DisplayResources";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ChooseCategory />
    </div>
  );
}

export default App;
