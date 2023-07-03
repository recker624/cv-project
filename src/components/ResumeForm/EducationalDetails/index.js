import React from "react";
import "./index.scss"

function EducationalDetailsInternal() {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <label htmlFor="edu-start-date" className="form-label">Start date</label>
        <input id="edu-start-date" className="form-control" type="date" />
      </div>
      <div className='col-md-6'>
        <label htmlFor="edu-end-date" className="form-label">End date</label>
        <input id="edu-end-date" className="form-control" type="date" />
      </div>
      <div className='col-md-6'>
        <label htmlFor="degree" className="form-label">Degree</label>
        <input id="degree" className="form-control" type="text" />
      </div>
      <div className='col-md-6'>
        <label htmlFor="education-city" className="form-label">City</label>
        <input id="education-city" className="form-control" type="text" />
      </div>
      <div className='col-md-6'>
        <label htmlFor="institution" className="form-label">Institution</label>
        <input id="institution" className="form-control" type="text" />
      </div>
    </div>
  );
}

function EducationalDetails() {
  return (
    <div className='mb-5'>
      <div className="mb-3">
        <h2>Educational Details</h2>
      </div>
      <EducationalDetailsInternal />
    </div>
  );
}

export default EducationalDetails;

