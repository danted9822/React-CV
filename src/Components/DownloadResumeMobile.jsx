import React, { useState, useEffect } from "react";

export const DownloadResumeMobile = () => {

    var lsTheme = ""

    const [theme, setTheme] = useState(lsTheme || "light");

    useEffect(() => {
        lsTheme = localStorage.getItem("theme", theme);
    }, [theme]);

    if (theme == "dark") {

        var resume = "myResumeDm.pdf"
    }
    else {
        var resume = "myResume.pdf"
    }

    const _toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <div>
            <a download="" href={resume} onClick={_toggleTheme} className="home-button-movil">Letöltés</a>
        </div>
    );
};
