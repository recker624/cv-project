import React from "react";
import "./ResumePreview.scss";
import ResumePreviewInner from "./ResumePreivewInner";
import ReactToPrint from "react-to-print";

class ResumePreview extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    
    return (
      <div className="resumePreview">
        <div className="resumePreviewOuter">
          <ResumePreviewInner
            ref={el => (this.componentRef = el)}
            personalDetails = {props.personalDetails}
            professionalSummary = {props.professionalSummary}
            educationalDetails = {props.educationalDetails}
            employmentHistory = {props.employmentHistory}
            skills = {props.skills}
            externalLinks = {props.externalLinks}
            personalProjects = {props.personalProjects}
          />
          <div className="buttonGroup">
            <div className="pdf-btn">
              <ReactToPrint
                trigger={() => {
                  return <button className="btn btn-primary convert-to-pdf" id="convert-to-pdf" >Convert To PDF</button>;
                }}
                content={() => this.componentRef}
              />
            </div>
            <div className="reset-load-btn">
              <button className="btn btn-danger" onClick={props.resetResumeForm}>Reset</button>
              <button className="btn btn-info" onClick={props.loadResumeExample}>Load Example</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePreview;