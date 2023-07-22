function Education({educationalDetails}) {
  const { startDate, endDate, degree, city, institution, description } = educationalDetails;
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let newStartDate  = startDate ? `${months[new Date(startDate).getMonth()].toUpperCase()} ${new Date(startDate).getFullYear()}` : null;;
  let newEndDate    = endDate ? `${months[new Date(endDate).getMonth()].toUpperCase()} ${new Date(endDate).getFullYear()}` : null;
  
  return (
    <div className="education">
      <div className="education-heading">
        {
          (startDate || endDate || degree || city || institution || description) ? <h2>Education</h2> : null
        }
      </div>
      <div className="education-details">
        {degree ? (degree+ ", ") : ""} {institution ? (institution + ", ") : ""} {city}
      </div>
      <div className="education-duration">
        {newStartDate ? (newStartDate + " - "):""}  {newEndDate}
      </div>
      <div className="educationDescription">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Education;
