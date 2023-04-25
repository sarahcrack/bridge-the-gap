import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/choose">Choose</Link>
      <Link to="/contribute">Contribute</Link>
      <Link to="/display">Display</Link>
    </div>
  );
}
export default NavBar;
