import React from 'react';
import ResumeForm from "./components/ResumeForm";
import ResumePreview from './components/ResumePreview/ResumePreview';
import './App.scss';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      personalDetails: {
        jobTitle: '',
        photo:'',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
      },
      professionalDetails: {
        description: '',
      },
      educationalDetails: {
        startDate: '',
        endDate: '',
        degree: '',
        institution: '',
      },
      employmentHistory: {
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city: '',
        description: '',
      },
      skills: [],
      externalLinks: [],
      personalProjects: [],
    }

    this.handlePersonalDetailsChange      = this.handlePersonalDetailsChange.bind(this);
    this.handleProfessionalDetailsChange  = this.handleProfessionalDetailsChange.bind(this);
    this.handleEducationalDetailsChange   = this.handleEducationalDetailsChange.bind(this);
    this.handleEmploymentHistoryChange    = this.handleEmploymentHistoryChange.bind(this);
    this.handleSkillsAdd                  = this.handleSkillsAdd.bind(this);
    this.handleSkillsDelete               = this.handleSkillsDelete.bind(this);
    this.handleSkillsChange               = this.handleSkillsChange.bind(this);
    this.handleExternalLinksAdd           = this.handleExternalLinksAdd.bind(this);
    this.handleExternalLinksDelete        = this.handleExternalLinksDelete.bind(this);
    this.handleExternalLinksChange        = this.handleExternalLinksChange.bind(this);
    this.handlePersonalProjectsAdd        = this.handlePersonalProjectsAdd.bind(this);
    this.handlePersonalProjectsDelete     = this.handlePersonalProjectsDelete.bind(this);
    this.handlePersonalProjectsChange     = this.handlePersonalProjectsChange.bind(this);
  }

  handlePersonalDetailsChange(e) {
    const value = e.target.value;
    let tempPersonalDetails = this.state.personalDetails;
    tempPersonalDetails[e.target.dataset.type] = value;

    this.setState({
      personalDetails: { ...tempPersonalDetails } ,
    });
  }

  handleProfessionalDetailsChange() {
  
  }

  handleEducationalDetailsChange() {
  }

  handleEmploymentHistoryChange() {

  }

  handleSkillsAdd(e, id) {
    this.setState({
      skills: [...this.state.skills, {_id:id, skillName:''}]
    });
  }

  handleSkillsDelete(e, index) {
    let skillsTemp = [...this.state.skills];
    skillsTemp.splice(index, 1);

    this.setState({
      skills: [...skillsTemp]
    })
  }

  handleSkillsChange(e, index) {
    const value = e.target.value;
    const skillsTemp = [...this.state.skills];
    skillsTemp[index].skillName = value;

    this.setState({
      skills:[...skillsTemp]
    })
  }

  handleExternalLinksAdd(e, id) {
    this.setState({
      externalLinks: [...this.state.externalLinks, {_id:id, linkName:'', linkURL:''}]
    })
  }

  handleExternalLinksDelete(e, index) {
    let tempExternalLink = [...this.state.externalLinks];
    tempExternalLink.splice(index, 1);

    this.setState({
      externalLinks: [...tempExternalLink],
    })
  }

  handleExternalLinksChange(e, index) {
    const value = e.target.value;
    const tempExternalLink = [...this.state.externalLinks];
    tempExternalLink[index][e.target.dataset.type] = value;

    this.setState({
      externalLinks: [...tempExternalLink],
    });
  }

  handlePersonalProjectsAdd(e, id) {
    this.setState({
      personalProjects: [...this.state.personalProjects, { _id: id, projectTitle: '', projectLink: '', projectDescription: '', additionalInfo: '' }]
    });
  }

  handlePersonalProjectsDelete(e, index) {
    let tempPersonalProjects = [...this.state.personalProjects];
    tempPersonalProjects.splice(index, 1);

    this.setState({
      personalProjects: [...tempPersonalProjects],
    });
  }

  handlePersonalProjectsChange(e, index) {
    let value = e.target.value;
    let tempPersonalProjects = [...this.state.personalProjects];
    tempPersonalProjects[index][e.target.dataset.type] = value;

    this.setState({
      personalProjects: [...tempPersonalProjects],
    });
  }


  render() {
    return (
      <>
        <nav>
          <div>CV Creator</div>
        </nav>
        <div className='container-fluid px-5 main-container'>
          <div className='row' >
            <div className="col-12 col-xxl-6">
              <ResumeForm
                onPersonalDetailsChange = {this.handlePersonalDetailsChange} personalDetails={this.state.personalDetails}
                onProfessionalDetailsChange = {this.handleProfessionalDetailsChange} professionalDetails={this.state.professionalDetails}
                onEducationalDetailsChange = {this.handleEducationalDetailsChange} educationalDetails={this.state.educationalDetails}
                onEmploymentHistoryChange = {this.handleEmploymentHistoryChange} employmentHistory={this.state.employmentHistory}
                onSkillsChange = {this.handleSkillsChange} onSkillsAdd={this.handleSkillsAdd} onSkillsDelete={this.handleSkillsDelete} skills={this.state.skills}
                onExternalLinksChange = {this.handleExternalLinksChange} onExternalLinksAdd={this.handleExternalLinksAdd} onExternalLinksDelete={this.handleExternalLinksDelete} externalLinks={this.state.externalLinks}
                onPersonalProjectsChange = {this.handlePersonalProjectsChange} onPersonalProjectsAdd={this.handlePersonalProjectsAdd} onPersonalProjectsDelete={this.handlePersonalProjectsDelete} personalProjects={this.state.personalProjects}
              /> 
            </div>
            <ResumePreview
              personalDetails={this.state.personalDetails}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;