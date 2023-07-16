import React from "react";


function EmploymentDetailsInternal() {
  return (
    <div className='row'>
      <div className='col-md-6 mb-2'>
        <label htmlFor="job-title" className="form-label">Job title</label>
        <input id="job-title" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="employer" className="form-label">Employer</label>
        <input id="employer" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <div className='col'>
          <label htmlFor="job-start-date" className="form-label">Start date</label>
          <input id="job-start-date" className="form-control" type="date" />
        </div>
        <div className='col'>
          <label htmlFor="job-end-date" className="form-label">End date</label>
          <input id="job-end-date" className="form-control" type="date" />
        </div>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="job-city" className="form-label">City</label>
        <input id="job-city" className="form-control" type="text" />
      </div>
      <div className='col-12 mb-2'>
        <label htmlFor="description" className="form-label">Description</label>
        <textarea id="description" className="form-control" rows="5" cols="40"></textarea>
      </div>
    </div>
  );
}

function EmploymentDetails() {
  return (
    <div className='mb-5 employment-details'>
      <div className="mb-2">
        <h2>Employment Details</h2>
      </div>
      <EmploymentDetailsInternal />
    </div>
  );
}

export default EmploymentDetails;