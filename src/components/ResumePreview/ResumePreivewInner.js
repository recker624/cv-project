import React from "react";
import ResumeSideBar from "./Sidebar/index";
import ResumeContent from "./ResumeContent/index";

class ResumePreviewInner extends React.Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  
  render() {

    const {
      personalDetails,
      professionalSummary,
      educationalDetails,
      employmentHistory,
      skills,
      externalLinks,
      personalProjects
    } = this.props;
    
    return (
      <div className="resumePreviewInner no-break-inside" id="resumePreviewInner">
        <ResumeSideBar
          personalDetails={personalDetails}
          externalLinks={externalLinks}
          skills={skills}
        />
        <ResumeContent
          professionalSummary={professionalSummary}
          employmentHistory={employmentHistory}
          educationalDetails={educationalDetails}
          personalProjects={personalProjects}
        />
      </div>
    );
  }
}

export default ResumePreviewInner;