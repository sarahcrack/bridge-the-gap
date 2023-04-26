import "./style.css";
import { Link } from "react-router-dom";
import facebook from "./../../Images/facebook-logo.png";
import instagram from "./../../Images/instagram-logo.png";
import linkedIn from "./../../Images/linkedIn-logo.png";

// create a function that displays a thank you message after the form is submitted
import blackArrow from "./../../Images/black-arrow.png";
function ThankYou() {
  return (
    <div className="thank-you-container">
      <h2>Thank you for your contribution!</h2>
      <p>You’ve helped to bridge the gap for your fellow bootcampers!</p>
      <p>Dont forget to share your contribution with other bootcampers! 🤩</p>
      <img src={blackArrow} alt="black arrow" className="arrow-image" />
      <div className="social-media-icons">
        <img src={facebook} alt="facebook logo" className="facebook-image" />
        <img src={instagram} alt="instagram logo" className="instagram-image" />
        <img src={linkedIn} alt="linkedin logo" className="linkedin-logo" />
      </div>
      <Link to="/display">
        <button className="click-for-contribution-button">
          Click to see your contribution!
        </button>
      </Link>
    </div>
  );
}

export default ThankYou;