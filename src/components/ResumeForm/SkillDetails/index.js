import React from "react";
import "./index.scss"

function addSkill() {
  console.log("addSkill");
}

function SkillsInternal() {
  return (
    <div>
      <button onClick={addSkill}>+ Add skill</button>
    </div>
  );
}

function Skills() {
  return (
    <div className='mb-5'>
      <div className="mb-3">
        <h2>Skills</h2>
      </div>
      <SkillsInternal />
    </div>
  );
}

export default Skills;