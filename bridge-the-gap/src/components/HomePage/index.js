import { Link } from "react-router-dom";
import bridge from "./../../Images/bridge.png";
import "./style.css";

function HomePage() {
  return (
    <div>
      <h1>
        <Link to="/display" state={{ section: "bridgeImage" }}>
          <img src={bridge} alt="BridgeImage" />
        </Link>
        Bridge the gap in your knowledge!
      </h1>
      <h2>
        <Link to="/contribute">
          <button className="nav-b">Add a resource</button>
        </Link>
        <Link to="/choose">
          <button className="nav-b">Find a resource</button>
        </Link>
      </h2>
      <p className="app-description">
        Your very own learning platform, where you can find and share any tools
        throughout your bootcamp journey!
      </p>
      <p className="app-description">You build it, and you learn from it!</p>
    </div>
  );
}
export default HomePage;
