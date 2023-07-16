import React from 'react';
import ResumeForm from "./components/ResumeForm";
import ResumePreview from './components/ResumePreview/ResumePreview';
import './App.scss';

function App() {
  return (
    <>
      <nav>
        <div>CV Creator</div>
      </nav>
      <div className='container-fluid px-5 main-container'>
        <div className='row' >
          <div className="col-12 col-xxl-6">
            <ResumeForm /> 
          </div>
          <ResumePreview />
        </div>
      </div>
    </>

  );
}

export default App;