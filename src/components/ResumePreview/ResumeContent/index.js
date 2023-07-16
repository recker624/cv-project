import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-heading">
        <h2>Profile</h2>
      </div>
      <div className="profile-description">
        <p>
          Results-oriented computer science graduate with a good academic background and a passion for technology. Knowledgeable in software development, data structures, algorithm. With a keen eye for detail and a commitment to writing clean and efficient code.
          Driven by a constant desire to learn and grow, I continuously expand my knowledge through self-study and  online courses. Eager to contribute my technical expertise and contribute to the success of a forward-thinking organization, I am ready to take on new challenges in the field of computer science.
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
        JANUARY 2023 - DECEMBER 2023
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
        B.tech (Computer Science), VIT Bhopal University, Bhopal
      </div>
      <div className="education-duration">
        JULY 2018 - JULY 2022
      </div>
      <div className="educationDescription">
        <p>Graduated with a GPA of 7.6</p>
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
      <ProjectContent
        projectTitle={"Weather App"}
        gitHubLink={'https://github.com/recker624/WeatherApp'}
        description={`A weather app that shows current weather and forcast.  OpenWeather API was used to get the Weather data for this project.`}
        techUsed={'Javascript, HTML, CSS, Webpack'}
      />
      <ProjectContent
        projectTitle={"Resturant Page"}
        gitHubLink={'https://github.com/recker624/Resturant-page'}
        description={`This is a simple landing page for an imaginary resturant website. Webpack was used
        to bundle the project which allowed for a smoother development process for the application.`}
        techUsed={'Javascript, HTML, CSS, Webpack'}
      />
      <ProjectContent
        projectTitle={"Book Card App"}
        gitHubLink={'https://github.com/recker624/Library'}
        description={`A book card application which allows the user to keep track of their favourite books they've already read or yet to read. This application uses DOM api for adding and deleting various elements on the website.`}
        techUsed={'Javascript, HTML, CSS'}
      />
    </div>
  )
}

function ProjectContent({ projectTitle, gitHubLink, description, techUsed }) {
  return (
     <div className="project">
        <div className="project-border"></div>
        <div className="project-title">
        { projectTitle }
        <a href={ gitHubLink } title="Visit on GitHub">
            <FontAwesomeIcon icon={faLink}/>
          </a>
        </div>
        <div className="github-link">
          
        </div>
        <div className="description">
          <p>
            {description}
          </p>
        </div>
        <div className="tech-stack">
        {techUsed}
      </div>
    </div>
  );
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