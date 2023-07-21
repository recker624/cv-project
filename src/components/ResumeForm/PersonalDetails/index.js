import React from "react";


function PersonalDetailsInternal({ onPersonalDetailsChange, personalDetails }) {
  return (
    <div className='row'>
      <div className='col-md-6 mb-2'>
        <label htmlFor="jobtitle" className="form-label">Job Title</label>     
        <input id="jobtitle" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.jobTitle} data-type="jobTitle" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="photo" className="form-label">Upload Photo</label>
        <input id="photo" accept="image/*" className="form-control" type="file" onChange={onPersonalDetailsChange}  data-type="photo"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="firstname" className="form-label">First Name</label>
        <input id="firstname" className="form-control" type="text" onChange={onPersonalDetailsChange} data="firstName" value={personalDetails.firstName} data-type="firstName"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input id="lastname" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.lastName} data-type="lastName"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.email} data-type="email"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.phone} data-type="phone"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="country" className="form-label">Country</label>
        <input id="country" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.country} data-type="country"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="city" className="form-label">City</label>
        <input id="city" className="form-control" type="text" onChange={onPersonalDetailsChange} value={personalDetails.city} data-type="city"/>
      </div>
    </div>
  );
}

class PersonalDetails extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }

  render() {
    const props = this.props;
    return (
      <div className='mb-4 personal-details'>
        <div className="mb-3">
          <h2>Personal Details</h2>
        </div>
        <PersonalDetailsInternal onPersonalDetailsChange={ props.onPersonalDetailsChange} personalDetails={props.personalDetails}/>
      </div>
    );
  }

}

export default PersonalDetails;