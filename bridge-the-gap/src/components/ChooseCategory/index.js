import React from "react";
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
    <div>
      <Link to="/display" state={{ section: "Coding" }}>
        <button>
          <img src={coding} alt="Coding" />
        </button>
      </Link>

      <Link to="/display" state={{ section: "Design" }}>
        <button>
          <img src={design} alt="Design" />
        </button>
      </Link>

      <Link to="/display" state={{ section: "Collaboration" }}>
        <button>
          <img src={collaboration} alt="Collaboration" />
        </button>
      </Link>

      <Link to="/display" state={{ section: "Planning" }}>
        <button>
          <img src={planning} alt="Planning" />
        </button>
      </Link>

      <Link to="/display" state={{ section: "Tutorial" }}>
        <button>
          <img src={tutorials} alt="Tutorial" />
        </button>
      </Link>

      <Link to="/display" state={{ section: "Careers" }}>
        <button>
          <img src={career} alt="Careers" />
        </button>
      </Link>
    </div>
  );
}

export default ChooseCategory;
