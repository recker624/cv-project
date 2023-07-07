import React from "react";
import "./index.scss";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-heading">
        <h2>Profile</h2>
      </div>
      <div className="profile-description">
        <p>
          Experienced and accomplished Health and Safety Engineer with a proven track record of promoting optimal health and safety in industrial spaces.
          Committed to identifying and improving substandard processes, while solving safety issues.
          Experienced in ensuring optimal workflow and efficient production in large-scale printing facilities. Bringing forth an in-depth understanding of facility management aimed at improving safe work processes and functions.
          Adept in trouble-shooting and working to offer solutions.
          A strong leader with excellent communication skills and a commitment to teamwork.
        </p>
      </div>
    </div>
  )
}

function EmploymentHistory() {
  return (
    <div className="employmentHistory">
      <div className="employmentHistory-heading">
        <h2>Employment History</h2>
      </div>
      <div className="job-details">
        Job Title, Employer, City Name
      </div>
      <div className="job-duration">
        January 2023 - December 2023
      </div>
      <div className="employmentDescription">
        <p>
          Conducted comprehensive job analyses to update job descriptions and salary benchmarks, resulting in improved job satisfaction and equity
          Wrote engaging job descriptions that clearly articulated the job duties and requirements
          Updated job descriptions and job postings to ensure legal compliance and attract qualified candidates.
        </p>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <div className="education-heading">
        <h2>Education</h2>
      </div>
      <div className="education-details">
        Degree, School, City Name
      </div>
      <div className="education-duration">
        January 2020 - January 2022
      </div>
      <div className="educationDescription">
        <p>Graduated with honors Blablabla</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="personal-projects">
      <div className="projects-heading">
        <h2>Personal Projects</h2>
      </div>
      <div className="project-title">
        Project Title
      </div>
      <div className="github-link">
        <a href="www.example.com">Github Link</a>
      </div>
      <div className="description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
      <div className="tech-stack">
        Tech Used : HTML, CSS, Javascript etc.
      </div>
    </div>
  )
}

function ResumeContent() {
  return (
    <div className="resume-content">
      <Profile />
      <EmploymentHistory />
      <Education />
      <Projects />
    </div>
  );
}

export default ResumeContent;