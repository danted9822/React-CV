import React from "react";


export const Certificates = ({
    certificateLabel,
    certificateTitle
}) => {
    return (
        <>
            <section className="certificate section" id="certificates">
                <h2 className="section-title">{certificateLabel}</h2>

                <div className="certificate_container bd-gird">
                    <div className="certificate_content">
                        <h3 className="certificate_title"> {certificateTitle}</h3>
                    </div>
                </div>
            </section>
           

        </>
    );
};






