import React from "react";


export const Languages = ({
    languageTitle,
    language
}) => {
    return (
        <>
            <section className="languages section">
                <h2 className="section-title">{languageTitle}</h2>
                <div className="languages_container">
                    <ul className="languages_content bd-grid">
                        {language.map((language) => <Language key={language.name} {...language} />)}
                    </ul>
                </div>
            </section>


        </>
    );
};


const Language = ({ name }) => (
    <li className="languages_name">
        <span className="languages_circle" /> {name}
    </li>
);









