import React from "react";

function EducationalDetailsInternal({changeEducationalDetails, educationalDetails}) {
  return (
    <div className='row'>
      <div className='col-md-6 mb-2'>
        <label htmlFor="edu-start-date" className="form-label">Start date</label>
        <input id="edu-start-date" className="form-control" type="date" onChange={changeEducationalDetails} value={educationalDetails.startDate} data-type="startDate" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="edu-end-date" className="form-label">End date</label>
        <input id="edu-end-date" className="form-control" type="date" onChange={changeEducationalDetails} value={educationalDetails.endDate} data-type="endDate"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="degree" className="form-label">Degree</label>
        <input id="degree" className="form-control" type="text" onChange={changeEducationalDetails} value={educationalDetails.degree} data-type="degree"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="education-city" className="form-label">City</label>
        <input id="education-city" className="form-control" type="text" onChange={changeEducationalDetails} value={educationalDetails.city} data-type="city"/>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="institution" className="form-label">Institution</label>
        <input id="institution" className="form-control" type="text" onChange={changeEducationalDetails} value={educationalDetails.institution} data-type="institution"/>
      </div>
      <div className='col-md-12 mb-2'>
        <label htmlFor="description" className="form-label">Description</label>
        <textarea id="description" className="form-control" rows={3} onChange={changeEducationalDetails} value={educationalDetails.description} data-type="description"/>
      </div>
    </div>
  );
}

class EducationalDetails extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { onEducationalDetailsChange: changeEducationalDetails, educationalDetails } = this.props;

    return(
      <div className='mb-4 educational-details'>
        <div className="mb-2">
          <h2>Educational Details</h2>
        </div>
        <EducationalDetailsInternal changeEducationalDetails={ changeEducationalDetails } educationalDetails={educationalDetails} />
      </div>
    );  
  }
  
}

export default EducationalDetails;

