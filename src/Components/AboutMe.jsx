import React from "react";

export const AboutMe = ({ label, description }) => (
  <section className="profile section" id="profile">
    <h2 className="section-title">{label}</h2>
    <p className="profile_description">{description}</p>
  </section>
);
