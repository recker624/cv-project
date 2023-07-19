import React from "react";
import "./index.scss";

import Photo from "./SidebarComponents/photo";
import Name from "./SidebarComponents/name";
import Occupation from "./SidebarComponents/occupation";
import Details from "./SidebarComponents/details";
import Links from "./SidebarComponents/links";
import Skills from "./SidebarComponents/skills";

class ResumeSideBar extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }
  render() {
   
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <Photo />
          <Name />
          <Occupation  />
          <Details />
          <Links />
          <Skills />
        </div>
      </div>
    );
  }
 
}

export default ResumeSideBar;