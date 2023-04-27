import "./style.css";
import { useLocation } from "react-router-dom";

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
        return require("./../../Images/logos/youtube.webp");
      case link.includes("figma"):
        return require("./../../Images/logos/figma.png");
      case link.includes("trello"):
        return require("./../../Images/logos/trello.jpg");
      case link.includes("canva"):
        return require("./../../Images/logos/canva.png");
      case link.includes("w3schools"):
        return require("./../../Images/logos/w3schools.png");
      case link.includes("miro"):
        return require("./../../Images/logos/miro.png");
      default:
        return require("./../../Images/logo.png");
    }
  }

  let foundMatchingResources = false;
  return (
    // Map through the resources that have been passed down from the APP
    // Display the resources one by one - resources.contributor, resources.category, resources.title, resources.description, resources.link
    <div>
      <h1>Section: {sectionName}</h1>

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
                <div class="resource-info">
                <h3>{resource.contributor}</h3>
                <h4>
                  <b>Category: </b>
                  {resource.category}
                </h4>
                <h4>{resource.title}</h4>
                <p>
                  <b>Description:</b> {resource.description}
                </p>
                <p>
                  <strong>Link:</strong>
                  <a href={linkify(resource.link)} target={"_blank"} rel="noreferrer">
                    {resource.link}
                  </a>
                </p>
              
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
