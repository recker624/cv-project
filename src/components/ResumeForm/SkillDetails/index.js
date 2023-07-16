import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function addSkill() {
  console.log("addSkill");
}

function SkillsInternal() {
  return (
    <div>
      <button onClick={addSkill} className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/> Add skill</button>
    </div>
  );
}

function Skills() {
  return (
    <div className='mb-4 skills'>
      <div className="mb-2">
        <h2>Skills</h2>
      </div>
      <SkillsInternal />
    </div>
  );
}

export default Skills;