import React from "react";

export const Education = ({ academic }) => {
  return (
    <section className="education section" id="education">
      <h2 className="section-title">Tanulmányok</h2>
      <div className="education__container bd-grid">
        {academic.map((academy) => (
          <Educate key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

const Educate = ({ career, date, institution }) => {
  return (
    <div className="education_content">
      <div className="education_time">
        <span className="education_rounder"></span>
        <span className="education_line"></span>
      </div>
      <div className="education_data bd-grid">
        <h3 className="education_title">{career}</h3>
        <span className="education_studies">{institution}</span>
        <span className="education_year">{date}</span>
      </div>
    </div>
  );
};
