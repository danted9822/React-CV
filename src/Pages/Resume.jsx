import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { AboutMe } from "../Components/AboutMe";
import { Skills } from "../Components/Skills";
import { SocialMedia } from "../Components/SocialMedia";
import { Works } from "../Components/Works";



export const Resume = () => {

    return (
        <>

            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume__left">
                        <Profile />
                        <AboutMe />
                        <Skills />
                        <SocialMedia />
                    </div>
                    <div className="resume__right">
                        <Works />
                    </div>
                </div>
            </main>
        </>

    );
};
