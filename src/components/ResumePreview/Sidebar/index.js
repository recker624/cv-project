import React from "react";
import "./index.scss";

function Photo() {
  return (
    <div className="photo">
      Photo Here
    </div>
  )
}

function Name() {
  return (
    <div className="name">
      My Name
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
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
        <li>Website</li>
      </ul>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <h2>Links</h2>
      <ul>
        <li>My Portfolio</li>
        <li>Linkdin</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

function Skills() { 
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
        <li>Node.js</li>
        <li>MongoDB</li>
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