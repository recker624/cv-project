import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

//=================
import myImage from '../../../assets/images/my-image.jpg';

function Photo() {
  return (
    <div className="photo">
      <img src={ myImage } alt="profile-photo" />
    </div>
  )
}

function Name() {
  return (
    <div className="name">
      Sahil Saini
      <div></div>
    </div>
  );
}

function Occupation() {
  return (
    <div className="occupation">
      FRONTEND DEVELOPER
    </div>
  );
}

function Details() {
  return (
    <div className="details">
      <h2>Details</h2>
      <ul>
        {/* <li>Address</li> */}
        <li>+91 6265702234</li>
        <li>sahilsaini624@gmail.com</li>
        {/* <li>Website</li> */}
      </ul>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <h2>Links</h2>
      <ul>
        <li><a href="https://sahilsaini.netlify.app">My Portfolio <FontAwesomeIcon icon={ faLink}/></a></li>
        <li><a href="https://www.linkedin.com/in/sahil-saini-977870282">LinkedIn <FontAwesomeIcon icon={ faLink}/></a></li>
        <li><a href="https://github.com/recker624">GitHub <FontAwesomeIcon icon={ faLink}/></a></li>
      </ul>
    </div>
  );
}

function Skills() { 
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>C++</li>
      </ul>
    </div>
  );
}

function ResumeSideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Photo />
        <Name />
        <Occupation />
        <Details />
        <Links />
        <Skills />
      </div>
    </div>
  );
}

export default ResumeSideBar;