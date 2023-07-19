import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import PersonalDetails from './PersonalDetails/index';
import EmploymentHistory from './EmploymentDetails/index';
import EducationalDetails from './EducationalDetails/index';
import Skills from './SkillDetails/index';
import PersonalProjects from './PersonalProjectDetails/index';
import ExternalLinks from './ExternalLinks/index';
import ProfessionalSummery from './ProfessionalSummery/index';

class ResumeForm extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div className="resume-form container pt-5 px-3">
        <PersonalDetails onPersonalDetailsChange={props.onPersonalDetailsChange} personalDetails={props.personalDetails}/>
        <ProfessionalSummery onProfessionalDetailsChange={props.onProfessionalDetailsChange} professionalDetails={props.professionalDetails} />
        <EducationalDetails onEducationalDetailsChange={props.onEducationalDetailsChange} educationalDetails={props.educationalDetails} />  
        <EmploymentHistory onEmploymentHistoryChange={props.onEmploymentHistoryChange} employmentHistory={props.employmentHistory} />
        <Skills onSkillsChange={props.onSkillsChange} onSkillsAdd={props.onSkillsAdd} onSkillsDelete={ props.onSkillsDelete} skills={props.skills} />
        <ExternalLinks onExternalLinksChange={props.onExternalLinksChange} onExternalLinksAdd={props.onExternalLinksAdd} onExternalLinksDelete={props.onExternalLinksDelete} externalLinks={ props.externalLinks } />
        <PersonalProjects onPersonalProjectsChange={props.onPersonalProjectsChange} onPersonalProjectsAdd={props.onPersonalProjectsAdd} onPersonalProjectsDelete={props.onPersonalProjectsDelete} personalProjects={props.personalProjects} />
      </div>
    );
  }
}

export default ResumeForm;