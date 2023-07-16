import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ExternalLinksInternal() {
  return (
    <div>
      <button className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/> Add link</button>
    </div>
  );
}

function ExternalLinks() {
  return (
    <div className='mb-4 external-links'>
      <div className="mb-2">
        <h2>Websites and Social Links</h2>
      </div>
      <ExternalLinksInternal />
    </div>
  );
}

export default ExternalLinks;