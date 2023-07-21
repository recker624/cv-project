import React from "react";
import "./index.scss";
import Profile from "./ResumeContentComponents/professionalSummery";
import EmploymentHistory from "./ResumeContentComponents/employmentHistory";
import Education from "./ResumeContentComponents/educationalDetails";
import Projects from "./ResumeContentComponents/personalProjects";


class ResumeContent extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {

    const {
      professionalSummary,
      employmentHistory,
      educationalDetails,
      personalProjects
    } = this.props;

    return (
      <div className="resume-content">
        <Profile professionalSummary={ professionalSummary } />
        <EmploymentHistory employmentHistory={ employmentHistory } />
        <Education educationalDetails={ educationalDetails } />
        <Projects personalProjects={ personalProjects } />
      </div>
    );
  }

}

export default ResumeContent;