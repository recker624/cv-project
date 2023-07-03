import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import PersonalDetails from './PersonalDetails/index';
import EmploymentDetails from './EmploymentDetails/index';
import EducationalDetails from './EducationalDetails/index';
import Skills from './SkillDetails/index';
import PersonalProjects from './PersonalProjectDetails/index';
import ExternalLinks from './ExternalLinks/index';
import ProfessionalSummery from './ProfessionalSummery/index';


function ResumeFormHeading() {
  return (
    <div className="resume-heading mb-3 container text-center">
      <h1>Resume</h1>
    </div>
  );
}

function ResumeForm() {
  return (
    <div className="resume-form container pt-5 px-3">
      <ResumeFormHeading />
      <PersonalDetails />
      <ProfessionalSummery />
      <EducationalDetails />  
      <EmploymentDetails />
      <Skills />
      <ExternalLinks />
      <PersonalProjects />
    </div>
  );
}

export default ResumeForm;