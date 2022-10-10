import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { AboutMe } from "../Components/AboutMe";


export const Resume = () => {

    return (
     <>
     
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile/>
            <AboutMe />

          </div>
          <div className="resume__right">
            <h1>
                ASD
            </h1>
          </div>
        </div>
      </main>
     </>

    );
  };
  