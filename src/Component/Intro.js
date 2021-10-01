import React from "react"
import Footer from "./Footer"
import ODBD from "../Images/ODBDThumbnail.png"
import TA from "../Images/TransparentAtelierThumbnail.png"
function Intro() {
    return (
        <div>
            <div className="intro-div">
                <h1>WELCOME!</h1>
                <h2>
                    I am a front-end developer based in New York City
                </h2>
                <h3> I build and design visually compelling  and user-friendly interfaces</h3>
            </div>

            <div className="project-demo-thumbnail-container">
                ODBD
                <img src={ODBD} alt="odbd" className="project-demo-thumbnail" />
                Transparent Atelier
                <img src={TA} alt="transparent atelier" className="project-demo-thumbnail" />
                HummingEffect
                <img src={ODBD} alt="odbd" className="project-demo-thumbnail" />
                OnStage
                <img src={ODBD} alt="odbd" className="project-demo-thumbnail" />

            </div>
            <Footer />
        </div>
    )
}
export default Intro;
