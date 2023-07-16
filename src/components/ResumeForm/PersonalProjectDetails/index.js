import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function PersonalProjectsInternal() {
  return (
    <div>
      <button className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/> Add project</button>
    </div>
  );
}

function PersonalProjects() {
  return (
    <div className='mb-4 personal-projects'>
      <div className="mb-2">
        <h2>Personal Projects</h2>
      </div>
      <PersonalProjectsInternal />
    </div>
  );
}

export default PersonalProjects;