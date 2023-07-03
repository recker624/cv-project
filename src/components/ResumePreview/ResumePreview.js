import React from "react";
import "./ResumePreview.scss";

import ResumeSideBar from "./Sidebar/index"
import ResumeContent from "./ResumeContent/index"

function ResumePreviewInner() {
  return (
    <div className="container row resumePreviewInner">
      <ResumeSideBar />
      <ResumeContent />
    </div>
  );
} 

function ButtonGroup() {
  return (
    <div className="container buttonGroup"> 
      <div className="row justify-content-between">
        <div className="col">
          <button>Convert To PDF</button>
        </div>
        <div className="col">
          <button>Reset</button>
          <button>Load Example</button>
        </div>
      </div>
    </div>
  )
}

function ResumePreviewMain() {
  return (
    <div className="col-xl-6 pt-5 resumePreviewMain">
      <div className="container resumePreviewOuter">
        <ResumePreviewInner />
        <ButtonGroup />
      </div>
    </div>
  );
}

export default ResumePreviewMain;