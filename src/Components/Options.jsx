import React, { useState, useEffect } from "react";



export const Options = () => {
  var { lsTheme, lsIcon, isEng } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
    isEng = localStorage.getItem("language");

  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "light");
  const [icon, setIcon] = useState(lsIcon || "bx-moon");
  const [language, setLanguage] = useState(isEng || "Eng");


  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("language", language);
    document.body.classList[theme === "light" ? "add" : "remove"]("light-theme");
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, icon, language]);



  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
  };


  const _toggleLanguage = () => {

    language === "Eng" ? setLanguage("Hun") : setLanguage("Eng")
    window.location.reload(false);


  }

  return (
    <div className="home_options">
      <i
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      />
      <i
        className={`bx ${language} change-language`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleLanguage}


      >
        {language}
      </i>
    </div>
  );
};
