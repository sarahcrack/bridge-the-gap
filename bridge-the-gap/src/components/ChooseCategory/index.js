import React from 'react';
import tutorials from '../src/Images/i-tutorials.png';


function ChooseCategory() {
  return (
    <div>
      <button> <img src={tutorials} alt="Tutorial" /> </button>
      <button>Design</button>
      <button>Tutorials</button>
      <button>Collaborative Tools</button>
    </div>
  );
}

export default ChooseCategory;
