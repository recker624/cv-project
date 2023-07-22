import React from "react";


function EmploymentHistoryInternal({changeEmploymentHistory, employmentHistory}) {
  return (
    <div className='row'>
      <div className='col-md-6 mb-2'>
        <label htmlFor="job-title" className="form-label">Job title</label>
        <input id="job-title" className="form-control" type="text" onChange={changeEmploymentHistory} value={ employmentHistory.jobTitle } data-type="jobTitle" />
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="employer" className="form-label">Employer</label>
        <input id="employer" className="form-control" type="text"  onChange={changeEmploymentHistory} value={ employmentHistory.employer } data-type="employer" />
      </div>
      <div className='col-md-6 mb-2'>
        <div className='col'>
          <label htmlFor="job-start-date" className="form-label">Start date</label>
          <input id="job-start-date" className="form-control" type="date"  onChange={changeEmploymentHistory} value={ employmentHistory.startDate } data-type="startDate" />
        </div>
        <div className='col'>
          <label htmlFor="job-end-date" className="form-label">End date</label>
          <input id="job-end-date" className="form-control" type="date"  onChange={changeEmploymentHistory} value={ employmentHistory.endDate } data-type="endDate" />
        </div>
      </div>
      <div className='col-md-6 mb-2'>
        <label htmlFor="job-city" className="form-label">City</label>
        <input id="job-city" className="form-control" type="text"  onChange={changeEmploymentHistory} value={ employmentHistory.city } data-type="city" />
      </div>
      <div className='col-12 mb-2'>
        <label htmlFor="description" className="form-label">Description</label>
        <textarea id="description" className="form-control" rows="5" cols="40" onChange={changeEmploymentHistory} value={ employmentHistory.description } data-type="description" />
      </div>
    </div>
  );
}

class EmploymentHistory extends React.Component{
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

    const { onEmploymentHistoryChange: changeEmploymentHistory, employmentHistory } = this.props;

    return (
      <div className='mb-5 employment-details'>
        <div className="mb-2">
          <h2>Employment Details</h2>
        </div>
        <EmploymentHistoryInternal changeEmploymentHistory={changeEmploymentHistory} employmentHistory={employmentHistory} />
      </div>
    );
  }


}

export default EmploymentHistory;