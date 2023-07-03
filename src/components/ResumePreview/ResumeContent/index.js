import React from "react";
import "./index.scss";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-heading">
        Profile
      </div>
      <div className="profileDescription">
        Experienced and accomplished Health and Safety Engineer with a proven track record of promoting optimal health and safety in industrial spaces.
        Committed to identifying and improving substandard processes, while solving safety issues.
        Experienced in ensuring optimal workflow and efficient production in large-scale printing facilities. Bringing forth an in-depth understanding of facility management aimed at improving safe work processes and functions.
        Adept in trouble-shooting and working to offer solutions.
        A strong leader with excellent communication skills and a commitment to teamwork.
      </div>
    </div>
  )
}

function EmploymentHistory() {
  return (
    <div className="employmentHistory">
      <div className="employmentHistory-heading">
        Employment History
      </div>
      <div className="job-details">
        Job Title, Employer, City Name
      </div>
      <div className="job-duration">
        January 2023 - December 2023
      </div>
      <div className="employmentDescription">
        Conducted comprehensive job analyses to update job descriptions and salary benchmarks, resulting in improved job satisfaction and equity
        Wrote engaging job descriptions that clearly articulated the job duties and requirements
        Updated job descriptions and job postings to ensure legal compliance and attract qualified candidates.
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <div className="education-heading">
        Education
      </div>
      <div className="education-details">
        Degree, School, City Name
      </div>
      <div className="education-duration">
        January 2020 - January 2022
      </div>
      <div className="educationDescription">
        Graduated with honors Blablabla
      </div>
    </div>
  );
}

function ResumeContent() {
  return (
    <div className="ResumeContent col-8">
      <Profile />
      <EmploymentHistory />
      <Education />
    </div>
  );
}

export default ResumeContent;