import React from "react";


function PersonalDetailsInternal() {
  return (
    <div className='row'>
      <div className='col-md-6 mb-2'>
        <label htmlFor="jobtitle" className="form-label">Job Title</label>     
        <input id="jobtitle" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="photo" className="form-label">Upload Photo</label>
        <input id="photo" className="form-control" type="file" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input id="firstname" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input id="lastname" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="country" className="form-label">Country</label>
        <input id="country" className="form-control" type="text" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="city" className="form-label">City</label>
        <input id="city" className="form-control" type="text" />
      </div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className='mb-4 personal-details'>
      <div className="mb-3">
        <h2>Personal Details</h2>
      </div>
      <PersonalDetailsInternal />
    </div>
  );
}

export default PersonalDetails;