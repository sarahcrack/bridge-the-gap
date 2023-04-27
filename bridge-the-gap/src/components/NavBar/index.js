import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../../Images/logo.png";

function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-right">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-right">
          <Link to="/">
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
          <Link to="/contribute">
            <FontAwesomeIcon
              icon={faEdit}
              className="nav-icon"
              style={{ color: "black" }}
            />
          </Link>
          <Link to="/display">
            <FontAwesomeIcon
              icon={faEye}
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
