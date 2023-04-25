import React from "react";
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

  let foundMatchingResources = false;
  return (
    // Map through the resources that have been passed down from the APP
    // Display the resources one by one - resources.contributor, resources.category, resources.title, resources.description, resources.link
    <div>
      <h1>Section: {sectionName}</h1>

      {resources.map((resource) => {
        // Check if the resource's category matches the section variable
        if (resource.category === sectionName || showall === true) {
          // If it matches, set foundMatchingResources to true and render the resource
          foundMatchingResources = true;
          return (
            <div className="resource-card" key={Math.random()}>
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
                <strong>Link:</strong>{" "}
                <a href={resource.link}>{resource.link}</a>
              </p>
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
