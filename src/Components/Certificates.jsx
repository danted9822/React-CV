import React from "react";

export const Certificates = ({ certificateLabel, certificates }) => {
  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title">{certificateLabel}</h2>
      <div className="certificate_container bd-grid">
        <ul className="certificate_content">
          {certificates.map((certificate, index) => (
            <Certificate key={index} {...certificate} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Certificate = ({ title, link }) => (
  <li className="certificate_item">

    <a href={link} target="_blank" rel="noopener noreferrer">
      <p className="certificate_title">{title}</p>
    </a>

  </li>
);