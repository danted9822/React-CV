import React from "react";

export const Skills = ({
  technicalLabel,
  technicalSkills
}) => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section_title">{technicalLabel}</h2>
        <div className="skills_content bd-grid">
          <ul className="skills_data">
            {technicalSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>

    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills_name">
    <span className="skills_circle" /> {skill}
  </li>
);
