import coding from "./../../Images/i-coding.png";
import design from "./../../Images/i-design.jpeg";
import collaboration from "./../../Images/i-collaboration.png";
import planning from "./../../Images/i-planning.png";
import tutorials from "./../../Images/i-tutorials.png";
import career from "./../../Images/i-career.png";
import "./style.css";
import { Link } from "react-router-dom";

function ChooseCategory() {
  return (
    <div className="container">
      <Link to="/display" state={{ section: "Coding" }}>
        <button className="button">
          <img src={coding} alt="Coding" />
          <p className="p">Coding</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Design" }}>
        <button className="button">
          <img src={design} alt="Design" />
          <p className="p">Design</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Collaboration" }}>
        <button className="button">
          <img src={collaboration} alt="Collaboration" />
          <p className="p">Collaboration</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Planning" }}>
        <button className="button">
          <img src={planning} alt="Planning" />
          <p className="p">Planning</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Tutorials" }}>
        <button className="button">
          <img src={tutorials} alt="Tutorials" />
          <p className="p">Tutorial</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Careers" }}>
        <button className="button">
          <img src={career} alt="Careers" />
          <p className="p">Careers</p>
        </button>
      </Link>
      <div className="select">
        <h3>Select a category</h3>
      </div>
    </div>
  );
}

export default ChooseCategory;
