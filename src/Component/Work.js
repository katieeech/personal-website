import React from "react";
import Footer from "./Footer";
import ODBD from "../Images/ODBDThumbnail.png";
import TA from "../Images/TransparentAtelierThumbnail.png";

function Work() {
    return (
        <div>
            <div className="project-thumbnail-container">
                ODBD
                <img src={ODBD} alt="odbd" className="project-thumbnail" />
                Transparent Atelier
                <img src={TA} alt="transparent atelier" className="project-thumbnail" />
                HummingEffect
                <img src={ODBD} alt="odbd" className="project-thumbnail" />
                OnStage
                <img src={ODBD} alt="odbd" className="project-thumbnail" />
            </div>
            <Footer />
        </div>
    )
}
export default Work;