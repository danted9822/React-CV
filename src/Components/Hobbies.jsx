import React from "react";


export const Hobbies = ({
    hobbieTitle,
    hobbie
}) => {
    return (
        <>
            <section className="hobbi section">
                <h2 className="section-title">{hobbieTitle}</h2>
                <div className="hobbies_container bd-grid">
                    {hobbie.map((hobbie) => <Hobbie key={hobbie.name} {...hobbie} />)}
                </div>
            </section>


        </>
    );
};

const Hobbie = ({ label, className }) => {
    return (
        <div className="hobbies_content">
            <i className={`bx ${className} hobbies_icon`}></i>
            <span className="hobbies_name">{label}</span>
        </div>
    );
};


