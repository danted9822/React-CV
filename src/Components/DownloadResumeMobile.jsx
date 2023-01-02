import React, { useState } from "react";

export const DownloadResumeMobile = () => {

    var lsTheme = "";
    var resume = "";
    var lsLanguage = "";


    try {
        lsTheme = localStorage.getItem("theme");
        lsLanguage = localStorage.getItem("language");
    } catch (e) {
        console.error(`All Cookies blocked - Error: ${e.message}`);
    }

    const [theme, setTheme] = useState(lsTheme || "light");



    if (lsTheme === "dark") {

        if (lsLanguage === "Eng") {
            resume = "HalászPéterCvEngD.pdf"
        } else {

            resume = "HalászPéterCvHunD.pdf"

        }

    }
    else {
        if (lsLanguage === "Eng") {
            resume = "HalászPéterCvEngL.pdf"
        } else {
            resume = "HalászPéterCvHunL.pdf"

        }
    }

    const _toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
            lsTheme = "dark"
        }
        else {
            setTheme("dark")
            lsTheme = "light"
        }

    };


    return (
        <div>
            <a download="" href={resume} onClick={_toggleTheme} className="home-button-movil">Download</a>
        </div>
    );
};
