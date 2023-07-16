import React from "react";
import "./ResumePreview.scss";
import ResumeSideBar from "./Sidebar/index";
import ResumeContent from "./ResumeContent/index";


function ResumePreviewInner() {
  return (
    <div className="resumePreviewInner no-break-inside" id="resumePreviewInner">
      <ResumeSideBar />
      <ResumeContent />
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

function ResumePreview() {
  return (
    <div className="resumePreview">
      <div className="resumePreviewOuter">
        <ResumePreviewInner />
        <ButtonGroup />
      </div>
    </div>
  );
}

const convertToSVG = () => {

}

export default ResumePreview;