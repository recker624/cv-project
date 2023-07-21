import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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

export default Projects;