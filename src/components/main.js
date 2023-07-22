import React from 'react';
import ResumeForm from "./ResumeForm";
import ResumePreview from './ResumePreview/ResumePreview';
import "./main.scss"

class Main extends React.Component {
    constructor() {
      super();

      this.state = {
        personalDetails: {
          jobTitle: '',
          photo: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          city: '',
        },
        professionalSummary: {
          description: '',
        },
        educationalDetails: {
          startDate: '',
          endDate: '',
          degree: '',
          city: '',
          institution: '',
          description: '',
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

      this.handlePersonalDetailsChange = this.handlePersonalDetailsChange.bind(this);
      this.handleProfessionalSummaryChange = this.handleProfessionalSummaryChange.bind(this);
      this.handleEducationalDetailsChange = this.handleEducationalDetailsChange.bind(this);
      this.handleEmploymentHistoryChange = this.handleEmploymentHistoryChange.bind(this);
      this.handleSkillsAdd = this.handleSkillsAdd.bind(this);
      this.handleSkillsDelete = this.handleSkillsDelete.bind(this);
      this.handleSkillsChange = this.handleSkillsChange.bind(this);
      this.handleExternalLinksAdd = this.handleExternalLinksAdd.bind(this);
      this.handleExternalLinksDelete = this.handleExternalLinksDelete.bind(this);
      this.handleExternalLinksChange = this.handleExternalLinksChange.bind(this);
      this.handlePersonalProjectsAdd = this.handlePersonalProjectsAdd.bind(this);
      this.handlePersonalProjectsDelete = this.handlePersonalProjectsDelete.bind(this);
      this.handlePersonalProjectsChange = this.handlePersonalProjectsChange.bind(this);
      this.resetResumeForm = this.resetResumeForm.bind(this);
      this.loadResumeExample = this.loadResumeExample.bind(this);
    }

    handlePersonalDetailsChange(e) {
      const value = e.target.value;
      let tempPersonalDetails = this.state.personalDetails;
      let dataType = e.target.dataset.type;

      //if the changed property the photo then change the URL of the uploaded photo else 
      //normally update the properties
      if (dataType !== 'photo') {
        tempPersonalDetails[dataType] = value;
      }
      else {
        const photoFile = e.target.files[0];
        tempPersonalDetails[dataType] = photoFile ? URL.createObjectURL(photoFile) : tempPersonalDetails.photo;
      }

      this.setState({
        personalDetails: { ...tempPersonalDetails },
      });


    }

    handleProfessionalSummaryChange(e) {
      const value = e.target.value;
      let tempProfessionalSummary = this.state.professionalSummary;
      tempProfessionalSummary.description = value;
      this.setState({
        professionalSummary: { ...tempProfessionalSummary },
      });
    }

    handleEducationalDetailsChange(e) {
      const value = e.target.value;
      let tempEducationalDetails = this.state.educationalDetails;
      tempEducationalDetails[e.target.dataset.type] = value;
      this.setState({
        educationalDetails: { ...tempEducationalDetails },
      });

    }

    handleEmploymentHistoryChange(e) {
      const value = e.target.value;
      let tempEmploymentHistory = this.state.employmentHistory;
      tempEmploymentHistory[e.target.dataset.type] = value;
      this.setState({
        employmentHistory: { ...tempEmploymentHistory },
      });
    }

    handleSkillsAdd(e, id) {
      this.setState({
        skills: [...this.state.skills, { _id: id, skillName: '' }]
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
        skills: [...skillsTemp]
      })
    }

    handleExternalLinksAdd(e, id) {
      this.setState({
        externalLinks: [...this.state.externalLinks, { _id: id, linkName: '', linkURL: '' }]
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
        personalProjects: [...this.state.personalProjects,
        {
          _id: id,
          projectTitle: '',
          projectLink: '',
          projectDescription: '',
          additionalInfo: ''
        }
        ]
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
  
  loadResumeExample() {
    this.setState({
      personalDetails: {
        jobTitle: 'Software Engineer',
        photo: '../../../../assets/images/shiba.jpg',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
        country: 'United States',
        city: 'New York',
      },
      professionalSummary: {
        description: `Experienced software engineer with a passion for building innovative web applications.Skilled in full-stack development, utilizing JavaScript, React, Node.js, and more. Strong track record of delivering high-quality solutions and collaborating in fast-paced environments. Always seeking new challenges to expand knowledge and drive project success.`,
      },
      educationalDetails: {
        startDate: '2012-09-01',
        endDate: '2016-05-01',
        degree: 'Bachelor of Science in Computer Science',
        city: 'San Francisco',
        institution: 'University of XYZ',
        description: 'Studied various programming languages and algorithms, and actively participated in coding competitions.',
      },
      employmentHistory: {
        jobTitle: 'Software Engineer',
        employer: 'Tech Solutions Inc.',
        startDate: '2018-06-15',
        endDate: '2022-12-31',
        city: 'New York',
        description: 'Worked on developing and maintaining web applications for clients in various industries. Collaborated with cross-functional teams to deliver high-quality software products.',
      },
      skills: [
        { _id: 'skill_1', skillName: 'React' },
        { _id: 'skill_2', skillName: 'JavaScript' },
        { _id: 'skill_3', skillName: 'Node.js' },
      ],
      externalLinks: [
        { _id: 'link_1', linkName: 'GitHub', linkURL: 'https://github.com/yourusername' },
        { _id: 'link_2', linkName: 'LinkedIn', linkURL: 'https://www.linkedin.com/in/yourusername' },
        { _id: 'link_3', linkName: 'Portfolio', linkURL: 'https://www.yourportfolio.com' },
      ],
      personalProjects: [
        {
          _id: 'project_1',
          projectTitle: 'E-Commerce Website',
          projectLink: 'https://www.ecommercewebsite.com',
          projectDescription: 'Developed a fully functional e-commerce website using React and Node.js.',
          additionalInfo: 'Technologies used : React, Node.js, Javascript, HTML, CSS',
        },
        {
          _id: 'project_2',
          projectTitle: 'Weather App',
          projectLink: 'https://www.weatherapp.com',
          projectDescription: 'Built a weather application that fetches and displays weather data based on user location.',
          additionalInfo: 'Technologies used : Node.js, Javascript, Third-party APIs',
        },
        {
          _id: 'project_3',
          projectTitle: 'Task Manager',
          projectLink: 'https://www.taskmanagerapp.com',
          projectDescription: 'Created a task manager app to organize and track daily tasks.',
          additionalInfo: 'Technologies used : Javascript, HTML, CSS',
        },
      ],
    })
  }

  resetResumeForm() {
    this.setState({
      personalDetails: {
          jobTitle: '',
          photo: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          city: '',
        },
        professionalSummary: {
          description: '',
        },
        educationalDetails: {
          startDate: '',
          endDate: '',
          degree: '',
          city: '',
          institution: '',
          description: '',
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
    });
  }

  render() {
    try {
      return (
        <>
          <nav>
            <div>CV Creator</div>
          </nav>
          <div className='container-fluid px-5 main'>
            <div className='row' >
              <div className="col-12 col-xxl-6">
                <ResumeForm
                  onPersonalDetailsChange={this.handlePersonalDetailsChange} personalDetails={this.state.personalDetails}
                  onProfessionalSummaryChange={this.handleProfessionalSummaryChange} professionalSummary={this.state.professionalSummary}
                  onEducationalDetailsChange={this.handleEducationalDetailsChange} educationalDetails={this.state.educationalDetails}
                  onEmploymentHistoryChange={this.handleEmploymentHistoryChange} employmentHistory={this.state.employmentHistory}
                  onSkillsChange={this.handleSkillsChange} onSkillsAdd={this.handleSkillsAdd} onSkillsDelete={this.handleSkillsDelete} skills={this.state.skills}
                  onExternalLinksChange={this.handleExternalLinksChange} onExternalLinksAdd={this.handleExternalLinksAdd} onExternalLinksDelete={this.handleExternalLinksDelete} externalLinks={this.state.externalLinks}
                  onPersonalProjectsChange={this.handlePersonalProjectsChange} onPersonalProjectsAdd={this.handlePersonalProjectsAdd} onPersonalProjectsDelete={this.handlePersonalProjectsDelete} personalProjects={this.state.personalProjects}
                />
              </div>
              <ResumePreview
                personalDetails={this.state.personalDetails}
                professionalSummary={this.state.professionalSummary}
                educationalDetails={this.state.educationalDetails}
                employmentHistory={this.state.employmentHistory}
                skills={this.state.skills}
                externalLinks={this.state.externalLinks}
                personalProjects={this.state.personalProjects}
                resetResumeForm={this.resetResumeForm}
                loadResumeExample={this.loadResumeExample}
              />
            </div>
          </div>
        </>
      );
    }     
    catch(e) {
      console.log(e.message);
    }
  }
}

export default Main;