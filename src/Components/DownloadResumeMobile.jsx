import React, { useState, useEffect } from "react";

export const DownloadResumeMobile = () => {

    var lsTheme = ""

    try {
        lsTheme = localStorage.getItem("theme");
    } catch (e) {
        console.error(`All Cookies blocked - Error: ${e.message}`);
    }

    const [theme, setTheme] = useState(lsTheme || "light");

    if (lsTheme == "dark") {

        var resume = "myResumeDM.pdf"
    }
    else {
        var resume = "myResume.pdf"
    }

    const _toggleTheme = () => {
        if (theme == "dark") {
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
            <a download="" href={resume} onClick={_toggleTheme} className="home-button-movil">Letöltés</a>
        </div>
    );
};
