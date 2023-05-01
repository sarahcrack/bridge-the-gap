import "./style.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DisplayResources({ resources, setResources }) {
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

  function handleStarClick(resource) {
    const swapped = resource.starred;
    resource.starred = !swapped;

    setResources([...resources]);
  }

  function getImage(link) {
    let imageArray = [
      "youtube",
      "figma",
      "trello",
      "canva",
      "w3schools",
      "miro",
      "freecodecamp",
      "codefirstgirls",
      "mozilla.org",
    ];

    for (let i = 0; i < imageArray.length; i++) {
      if (link.replace(".", "").includes(imageArray[i])) {
        return require("./../../Images/logos/" + imageArray[i] + ".png");
      }
    }
    return require("./../../Images/logo.png");
  }

  let foundMatchingResources = false;
  return (
    // Map through the resources that have been passed down from the APP
    // Display the resources one by one - resources.contributor, resources.category, resources.title, resources.description, resources.link
    <div>
      {resources
        .slice()
        .sort((a, b) => (b.starred ? 1 : -1)) // Sort by `starred` property
        .map((resource) => {
          // Check if the resource's category matches the section passed in, or if showall is true
          if (resource.category === sectionName || showall === true) {
            foundMatchingResources = true;
            return (
              <div className="resource-card" key={Math.random()}>
                <div className="resource-image">
                  <img src={getImage(resource.link)} alt="resource" />
                </div>

                <div className="resource-info">
                  <div className="resource-info-title">
                    <div>
                      <h4>{resource.title}</h4>
                    </div>
                  </div>
                  <div className="resource-category">{resource.category}</div>

                  <p className="description">{resource.description}</p>
                  <div className="resource-info-link">
                    <div>
                      <button>
                        <a
                          href={linkify(resource.link)}
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          View more
                        </a>
                      </button>
                    </div>
                    <div>
                      <button onClick={() => handleStarClick(resource)}>
                        <FontAwesomeIcon
                          icon={faStar}
                          {...(resource.starred
                            ? { style: { color: "#d7b200" } }
                            : { style: { color: "#735d58" } })}
                          beat
                          // style={{ color: "#735d58" }}
                        />
                      </button>
                    </div>
                  </div>

                  <h3>Submitted by {resource.contributor}</h3>
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
