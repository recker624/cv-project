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
    </div>
  );
}

function Occupation() {
  return (
    <div className="occupation">
      Software Engineer
    </div>
  );
}

function Details() {
  return (
    <div className="details">
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
      <ul>
        <li>www.github.com/myname</li>
        <li>www.linkedin.com/myname</li>
        <li>www.myemail.com</li>
        <li>www.mywebsite.com</li>
      </ul>
    </div>
  );
}

function Skills() { 
  return (
    <div className="skills">
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
    <div className="sidebar col-4">
      <div className="name-photo">
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