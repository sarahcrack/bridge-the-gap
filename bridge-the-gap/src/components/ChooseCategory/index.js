import React from "react";
import coding from "../../Images/i-coding.png";
import design from "../../Images/i-design.jpeg";
import collaboration from "../../Images/i-collaboration.png";
import planning from "../../Images/i-planning.png";
import tutorials from "../../Images/i-tutorials.png";
import career from "../../Images/i-career.png";

function ChooseCategory() {
  return (
    <div>
      <button>
        {" "}
        <img src={coding} alt="Coding" />{" "}
      </button>
      <button>
        {" "}
        <img src={design} alt="Design" />{" "}
      </button>
      <button>
        {" "}
        <img src={collaboration} alt="Collaboration" />{" "}
      </button>
      <button>
        {" "}
        <img src={planning} alt="Planning" />{" "}
      </button>
      <button>
        {" "}
        <img src={tutorials} alt="Tutorial" />{" "}
      </button>
      <button>
        {" "}
        <img src={career} alt="Careers" />{" "}
      </button>
    </div>
  );
}

export default ChooseCategory;
