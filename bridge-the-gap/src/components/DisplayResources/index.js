import "./style.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DisplayResources({ resources }) {
  const location = useLocation();
  //check if location.state.section is null
  let showall = false;
  let sectionName = "";
  if (location.state === null) {
    showall = true;
    sectionName = "All Resources";
  } else {
    sectionName = location.state.section;
  }

  function linkify(link) {
    if (link.includes("http://") || link.includes("https://")) {
      return link;
    } else {
      return "https://" + link;
    }
  }

  function getImage(link) {
    switch (true) {
      case link.replace(".", "").includes("youtube"):
        return require("./../../Images/logos/youtube.png");
      case link.includes("figma"):
        return require("./../../Images/logos/figma.png");
      case link.includes("trello"):
        return require("./../../Images/logos/trello.png");
      case link.includes("canva"):
        return require("./../../Images/logos/canva.png");
      case link.includes("w3schools"):
        return require("./../../Images/logos/w3schools.png");
      case link.includes("miro"):
        return require("./../../Images/logos/miro.png");
      case link.includes("freecodecamp"):
        return require("./../../Images/logos/freecodecamp.png");
      case link.includes("codefirstgirls"):
        return require("./../../Images/logos/codefirstgirls.png");
      case link.includes("mozilla.org"):
        return require("./../../Images/logos/mozilla.png");
      default:
        return require("./../../Images/logo.png");
    }
  }

  let foundMatchingResources = false;
  return (
    // Map through the resources that have been passed down from the APP
    // Display the resources one by one - resources.contributor, resources.category, resources.title, resources.description, resources.link
    <div>
      {resources
        .slice()
        .reverse()
        .map((resource) => {
          // Check if the resource's category matches the section passed in, or if showall is true
          if (resource.category === sectionName || showall === true) {
            foundMatchingResources = true;
            return (
              <div className="resource-card" key={Math.random()}>
                <img
                  className="resource-image"
                  src={getImage(resource.link)}
                  alt="resource"
                />

                <div className="resource-info">
                  <FontAwesomeIcon
                    icon={faStar}
                    beat
                    style={{ color: "#735d58" }}
                  />

                  <h4>{resource.category}</h4>
                  <h4>{resource.title}</h4>
                  <p className="description">{resource.description}</p>
                  <p>
                    <button>
                      <a
                        href={linkify(resource.link)}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        View more
                      </a>
                    </button>
                  </p>

                  <h3>Submitted by {resource.contributor}</h3>
                  <div></div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      {/* If no matching resources were found, display the message */}
      {!foundMatchingResources && <p>None found.</p>}
    </div>
  );
}

export default DisplayResources;
