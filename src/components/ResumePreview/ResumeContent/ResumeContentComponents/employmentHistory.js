function EmploymentHistory({ employmentHistory}) {

  const { jobTitle, employer, startDate, endDate, city, description } = employmentHistory;
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let newStartDate  = startDate ? `${months[new Date(startDate).getMonth()].toUpperCase()} ${new Date(startDate).getFullYear()}` : null;;
  let newEndDate    = endDate ? `${months[new Date(endDate).getMonth()].toUpperCase()} ${new Date(endDate).getFullYear()}` : null;

  return (
    <div className="employmentHistory">
      <div className="employmentHistory-heading">
        {
          (jobTitle || employer || startDate || endDate || city || description) ? <h2>Employment History</h2> : null
        }
      </div>
      <div className="job-details">
        {jobTitle ? (jobTitle + ", ") : ""} {employer ? (employer + ", ") : ""} {city}
      </div>
      <div className="job-duration">
        {newStartDate ? (newStartDate + " - ") : ""} {newEndDate}
      </div>
      <div className="employmentDescription">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default EmploymentHistory;