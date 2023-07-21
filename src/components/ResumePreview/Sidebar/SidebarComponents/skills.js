function Skills({skills}) { 
  return (
    <div className="skills">
      {
        (skills.length > 0) ? <h2>Skills</h2> : null
      }
      <ul>
        {
          skills.map((skill, index) => {
            return <li key={skill._id + index}>{skill.skillName}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Skills;
