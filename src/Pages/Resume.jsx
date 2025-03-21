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
import { DataEng as dataSchemaEng } from "../Schemas/DataEng";
import { Menu as menuSchema } from "../Schemas/Menu";
import { MenuEng as menuSchemaEng } from "../Schemas/MenuEng";

export const Resume = () => {
    const query = "(min-width: 968px)";
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    let lsLanguage;
    let mobileMenu;

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches]);

    try {
        lsLanguage = localStorage.getItem("language");
    } catch (e) {
        console.error(`All Cookies blocked - Error: ${e.message}`);
    }

    let profile, aboutMe, skills, socialMedia, studies, experience, certificates, languages, hobbies;

    if (lsLanguage === "Hun") {
        ({ profile, aboutMe, skills, socialMedia, studies, experience, certificates, languages, hobbies } = dataSchema);
        mobileMenu = !matches && <Menu {...menuSchema} />;
    } else {
        ({ profile, aboutMe, skills, socialMedia, studies, experience, certificates, languages, hobbies } = dataSchemaEng);
        mobileMenu = !matches && <Menu {...menuSchemaEng} />;
    }

    return (
        <>
            {mobileMenu}
            <main className="l-main bd-container" id="bd-container">
                <div className="resume" id="area-cv">
                    <div className="resume_left">
                        <Profile {...profile} />
                        <SocialMedia {...socialMedia} />
                        <AboutMe {...aboutMe} />
                        <Education {...studies} />
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
