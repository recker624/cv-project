import React from 'react';
import ResumeForm from "./components/ResumeForm";
import ResumePreviewMain from './components/ResumePreview/ResumePreview';
import "./app.scss"

function App() {
  return (
    <div className='container-fluid px-5 main-container'>
      <div className='row w-100' >
        <div className="col-12 col-xxl-6">
          <ResumeForm /> 
        </div>
        <div className="placeholder-element"></div>
        <ResumePreviewMain />
      </div>
    </div>
  );
}

export default App;