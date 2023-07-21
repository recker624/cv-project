import React from "react";
import "./ResumePreview.scss";
import ResumeSideBar from "./Sidebar/index";
import ResumeContent from "./ResumeContent/index";


function ResumePreviewInner({
      personalDetails,
      professionalSummary,
      educationalDetails, 
      employmentHistory, 
      skills, 
      externalLinks, 
      personalProjects 
})
{
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

function ButtonGroup() {
  return (
    <div className="buttonGroup"> 
        <div className="pdf-btn">
          <button className="btn btn-primary convert-to-pdf" id="convert-to-pdf" onClick={convertToSVG}>Convert To PDF</button>
        </div>
        <div className="reset-load-btn">
          <button className="btn btn-danger">Reset</button>
          <button className="btn btn-info">Load Example</button>
        </div>
    </div>
  )
}

class ResumePreview extends React.Component {
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
      <div className="resumePreview">
        <div className="resumePreviewOuter">
          <ResumePreviewInner
            personalDetails={personalDetails}
            professionalSummary={professionalSummary}
            educationalDetails={educationalDetails}
            employmentHistory={employmentHistory}
            skills={skills}
            externalLinks={externalLinks}
            personalProjects={personalProjects}
          />
          <ButtonGroup />
        </div>
      </div>
    );
  }

}

const convertToSVG = () => {

}

export default ResumePreview;