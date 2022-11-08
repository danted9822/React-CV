import React, { useState, useEffect } from "react";

export const DownloadResume = () => {

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
        <div className="home_options">
            <a download="" onClick={_toggleTheme} href={resume}   >

                <i className='bx bx-download generate-pdf' title="Generate PDF" id="resume-button"></i>
            </a>
        </div>
    );
};
