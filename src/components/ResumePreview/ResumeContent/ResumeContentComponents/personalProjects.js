import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ProjectContent({ projectTitle, gitHubLink, description, additionalInfo }) {
  return (
     <div className="project" >
        <div className="project-border"></div>
        <div className="project-title">
        { projectTitle }
        <a href={ gitHubLink } title="View Project">
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
        <div className="additional-info">
        {additionalInfo}
      </div>
    </div>
  );
}

class Projects extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { personalProjects } = this.props;

    return (
        <div className="personal-projects">
          <div className="projects-heading">
            {
              personalProjects.length > 0 ? <h2>Personal Projects</h2> : null
            }
          </div>
          {
            personalProjects.map((project, index) => {
              return (
                <ProjectContent
                  key={project._id + index}
                  projectTitle={project.projectTitle}
                  gitHubLink={project.projectLink}
                  description={project.projectDescription}
                  additionalInfo={project.additionalInfo}
                />
              );
            })
          }

        </div>
      )
  }
}


export default Projects;