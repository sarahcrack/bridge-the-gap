import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link to="/choose">
        <button className="nav-button">Choose</button>
      </Link>
      <Link to="/contribute">
        <button className="nav-button">Contribute</button>
      </Link>
      <Link to="/display">
        <button className="nav-button">Display</button>
      </Link>
    </div>
  );
}
export default NavBar;
