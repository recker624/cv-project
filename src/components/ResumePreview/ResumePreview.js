import React from "react";
import "./ResumePreview.scss";

import ResumeSideBar from "./Sidebar/index"
import ResumeContent from "./ResumeContent/index"

function ResumePreviewInner() {
  return (
    <div className="resumePreviewInner">
      <ResumeSideBar />
      <ResumeContent />
    </div>
  );
} 

function ButtonGroup() {
  return (
    <div className="buttonGroup"> 
      <div className="">
        <div className="">
          <button>Convert To PDF</button>
        </div>
        <div className="">
          <button>Reset</button>
          <button>Load Example</button>
        </div>
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

export default ResumePreview;