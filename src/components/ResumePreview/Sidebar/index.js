import React from "react";
import "./index.scss";

import Name from "./SidebarComponents/name";
import Occupation from "./SidebarComponents/occupation";
import Details from "./SidebarComponents/details";
import Links from "./SidebarComponents/links";
import Skills from "./SidebarComponents/skills";
import Photo from "./SidebarComponents/photo";

class ResumeSideBar extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {

    const { personalDetails, externalLinks, skills } = this.props;
   
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <Photo photo={ personalDetails.photo } />
          <Name firstName={personalDetails.firstName} lastName={personalDetails.lastName} />
          <Occupation jobTitle={ personalDetails.jobTitle } />
          <Details email={personalDetails.email} phone={personalDetails.phone} country={personalDetails.country} city={personalDetails.city} />
          <Links externalLinks={externalLinks} />
          <Skills skills={skills} />
        </div>
      </div>
    );
  }
 
}

export default ResumeSideBar;