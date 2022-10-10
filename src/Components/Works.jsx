import React from "react";
import { Description } from "./Description";
export const Works = ({ works }) => {
    return (
        <section className="experience section" id="experience">
            <h2 className="section-title">Experiencia</h2>
            <div className="experience_container bd-grid">
                {works.map((work) => (
                    <Work key={work.company} {...work} />
                ))}
            </div>
        </section>
    );
};

const Work = ({ title, period, company, description }) => {
    return (
        <div className="experience_content">
            <div className="experience_time">
                <span className="experience_rounder"></span>
                <span className="experience_line"></span>
            </div>
            <div className="experience_data bd-grid">
                <h3 className="experience_title">{title}</h3>
                <span className="experience_company">
                    {company}
                </span>
                <span className="experience_year">
                    {period}
                </span>
                
                {description.map((desc, i) => <Description key={i} desc={desc} />)}
            </div>
        </div>
    );
};
