import React from 'react';
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from 'uniqid';

class PersonalProjects extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

    const {
      onPersonalProjectsChange: changePersonalProjects,
      onPersonalProjectsAdd: addPersonalProjects,
      onPersonalProjectsDelete: deletePersonalProjects,
      personalProjects
    } = this.props;

    return (
      <div className='mb-4 personal-projects'>
        <div className="mb-2">
          <h2>Personal Projects</h2>
        </div>
        <div className="personal-projects-list">
          {
            personalProjects.map((project, index) => {
              return (
                <div key={project._id} className='row'>
                  <button
                    onClick={(e) => deletePersonalProjects(e, index)}
                    className="btn btn-secondary deleteSkillBtn"
                  >
                      <FontAwesomeIcon icon={faX} />
                  </button>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="project-title" className='form-label'>Project title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="project-title"
                      data-type="projectTitle"
                      value={project.title}
                      placeholder='Title'
                      onChange={(e) => changePersonalProjects(e, index)}
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="project-link" className='form-label'>Project Link</label>
                    <input
                      type="text"
                      className="form-control"
                      id="project-link"
                      data-type="projectLink"
                      value={project.projectLink}
                      placeholder='Eg:Github link'
                      onChange={(e) => changePersonalProjects(e, index)}
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="project-description" className='form-label'>Description</label>
                    <textarea
                      className="form-control"
                      id="project-description"
                      rows={4}
                      data-type="projectDescription"
                      value={project.projectDescription}
                      placeholder='Tell something about this project'
                      onChange={(e) => changePersonalProjects(e, index)}
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label htmlFor="project-additional-info" className='form-label'>Additional Info</label>
                    <textarea
                      className="form-control"
                      id="project-additional-info"
                      rows={2}
                      data-type="additionalInfo"
                      value={project.additionalInfo}
                      placeholder='Anything else about the project (like languages used eg: Javascript, Python, etc)'
                      onChange={(e) => changePersonalProjects(e, index)}
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div>
          <button onClick={(e) => addPersonalProjects(e, uniqid())} className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/>Add project</button>
        </div>
      </div>
    );
  }

}

export default PersonalProjects;