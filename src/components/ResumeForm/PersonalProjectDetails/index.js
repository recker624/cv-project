import React from 'react';
import "./index.scss"

function PersonalProjectsInternal() {
  return (
    <div>
      <button>+ Add project</button>
    </div>
  );
}

function PersonalProjects() {
  return (
    <div className='mb-5'>
      <div className="mb-3">
        <h2>Personal Projects</h2>
      </div>
      <PersonalProjectsInternal />
    </div>
  );
}

export default PersonalProjects;