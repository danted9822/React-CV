import React, { useState, useEffect } from "react";

export const DownloadResume = () => {

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
        <div className="home_options">
            <a download="" onClick={_toggleTheme} href={resume}   >

                <i className='bx bx-download generate-pdf' title="Generate PDF" id="resume-button"></i>
            </a>
        </div>
    );
};
