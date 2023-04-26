import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/choose">
        <button className="nav-button">Choose</button>
      </Link>
      <Link to="/contribute">
        <button className="nav-button">Contribute</button>
      </Link>
    </div>
  );
}
export default HomePage;
