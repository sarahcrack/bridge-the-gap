import React from "react";
import "./style.css";

function DisplayResources({ resources }) {
  return (
    // Map through the resources that have been passed down from the APP
    // Display the resources one by one - resources.contributor, resources.category, resources.title, resources.description, resources.link
    <div>
      {resources.map((resource, index) => (
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
            <strong>Link:</strong> <a href={resource.link}>{resource.link}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayResources;
