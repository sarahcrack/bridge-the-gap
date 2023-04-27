import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faEdit,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../../Images/logo.png";

function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <Link to="/" title="Home">
          <div className="nav-right">
            <img src={logo} alt="Logo" className="nav-logo" />
          </div>
        </Link>

        <div className="nav-right">
          <Link to="/" title="Home">
            <FontAwesomeIcon
              icon={faHome}
              className="nav-icon"
              style={{ color: "black" }}
            />
          </Link>
          <Link to="/choose" title="Choose a category">
            <FontAwesomeIcon
              icon={faList}
              className="nav-icon"
              style={{ color: "black" }}
            />
          </Link>
          <Link to="/contribute" title="Contribute a resource">
            <FontAwesomeIcon
              icon={faEdit}
              className="nav-icon"
              style={{ color: "black" }}
            />
          </Link>
          <Link to="/display" title="View resources">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="nav-icon"
              style={{ color: "black" }}
            />
          </Link>
        </div>
      </div>
      <div className="nav-bar-2"></div>
    </div>
  );
}

export default NavBar;
