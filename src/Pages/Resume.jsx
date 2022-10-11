import React, { useState, useEffect } from "react";

import { Profile } from "../Components/Profile";
import { AboutMe } from "../Components/AboutMe";
import { Education } from "../Components/Education";
import { Skills } from "../Components/Skills";
import { SocialMedia } from "../Components/SocialMedia";
import { Works } from "../Components/Works";
import { Menu } from "../Components/Menu";
import { Hobbies } from "../Components/Hobbies";
import { Languages } from "../Components/Languages";
import { Certificates } from "../Components/Certificates";

import { Data as dataSchema } from "../Schemas/Data";
import { Menu as menuSchema } from "../Schemas/Menu";

export const Resume = () => {

    const query = "(min-width: 968px)";
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches]);

    const { profile, aboutMe, skills, socialMedia, experience, certificates, languages, hobbies } = dataSchema;



    return (
        <>
            {!matches && <Menu {...menuSchema} />}
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume_left">
                        <Profile {...profile} />
                        <SocialMedia {...socialMedia} />
                        <AboutMe {...aboutMe} />
                        <Education {...experience} />
                        <Skills {...skills} />
                    </div>
                    <div className="resume_right">
                        <Works {...experience} />
                        <Certificates {...certificates} />
                        <Languages {...languages} />
                        <Hobbies {...hobbies} />
                    </div>
                </div>
            </main>
        </>

    );
};
