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
    <div class="container">
      <Link to="/display" state={{ section: "Coding" }}>
        <button class="button">
          <img src={coding} alt="Coding" />
          <p class="p">Coding</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Design" }}>
        <button class="button">
          <img src={design} alt="Design" />
          <p class="p">Design</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Collaboration" }}>
        <button class="button">
          <img src={collaboration} alt="Collaboration" />
          <p class="p">Collaboration</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Planning" }}>
        <button class="button">
          <img src={planning} alt="Planning" />
          <p class="p">Planning</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Tutorial" }}>
        <button class="button">
          <img src={tutorials} alt="Tutorial" />
          <p class="p">Tutorial</p>
        </button>
      </Link>

      <Link to="/display" state={{ section: "Careers" }}>
        <button class="button">
          <img src={career} alt="Careers" />
          <p class="p">Careers</p>
        </button>
      </Link>
    </div>
  );
}

export default ChooseCategory;
