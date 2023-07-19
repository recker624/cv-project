import React from "react";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";

import "./index.scss";

class Skills extends React.Component {
  //eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  };

  render() {
    const { onSkillsChange:changeSkills, onSkillsAdd:addSkills, onSkillsDelete:deleteSkills, skills } = this.props;

    return (
      <div className='mb-4 skills'>
        <div className="mb-2">
          <h2>Skills</h2>
        </div>
        <div className="skills-list">
          {
            skills.map((skill, index) => {
              return (
                <div key={skill._id}>
                  <input
                    type="text"
                    value={skill.skillName}
                    onChange={(e) => changeSkills(e, index)}
                    className="form-control my-2"
                    placeholder="Enter skill"
                  />
                  <button
                    onClick={(e) => deleteSkills(e, index)}
                    className="btn btn-white deleteSkillBtn"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              );
            })
          }
        </div>
        <div>
          <button onClick={(e)=>addSkills(e, uniqid())} className="btn btn-secondary mt-2"><FontAwesomeIcon icon={faPlus}/> Add skill</button>
        </div>
      </div>
    );
  }
}

export default Skills;