import React from "react";
import { Options } from "./Options";

export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
}) => {
  return (
    <section className="home" id="home">
      <div className="home_container section bd-grid">
        <div className="home_data bd-grid">
          <img src={image} alt="profile_image" className="home_img" />
          <h1 className="home_title">
            {name}
          </h1>
          <h3 className="home_profession">{ocupation}</h3>
          <div>
            <a download="" href="myResume.pdf" className="home-button-movil">Letöltés</a>
          </div>
        </div>

        <div className="home_address bd-grid">
          <span className="home_information">
            <i className="bx bx-map home_icon" /> {location}
          </span>
          <span className="home_information">
            <i className="bx bx-envelope home_icon" /> {email}
          </span>
          <span className="home_information">
            <i className="bx bx-phone home_icon" /> {telephone}
          </span>
        </div>
      </div>
      <Options />

      <a download="" href="myResume.pdf" >

      <i className='bx bx-download generate-pdf' title="Generate PDF" id="resume-button"></i>
      </a>
    </section>
  );
};
