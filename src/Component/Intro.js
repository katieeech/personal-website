import React from "react"
import Footer from "./Footer"
import ODBD from "../Images/ODBDThumbnail.png"
import TA from "../Images/TransparentAtelierThumbnail.png"
import { Link } from "react-router-dom"

function Intro() {
    return (
        <div className="intro-outer-container">
            <div className="intro-div">
                <h1>WELCOME!</h1>
                <h2>
                    I am a <span className="fed">front-end developer</span> based in New York City
                </h2>
                <h3> I build and design visually compelling and user-friendly interfaces</h3>
            </div>

            <div className="from-right"></div>
            <h3>/Explore My Work</h3>

            <div className="proj-demos-container">

                <div className="proj-demo-thumb-container">
                    <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">
                        <img src={ODBD} alt="odbd" className="proj-demo-img" />
                        <div className="proj-thumb-middle">
                            <div className="proj-thumb-title">ODBD</div>
                        </div>
                    </Link>
                </div>

                <div className="proj-demo-thumb-container">
                    <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">
                        <img src={TA} alt="transparent atelier" className="proj-demo-img" />
                        <div className="proj-thumb-middle">
                            <div className="proj-thumb-title">Transparent Atelier</div>
                        </div>
                    </Link>

                </div>

                <div className="proj-demo-thumb-container">
                    <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">
                        <img src={ODBD} alt="odbd" className="proj-demo-img" />
                        <div className="proj-thumb-middle">
                            <div className="proj-thumb-title">Humming Effect</div>
                        </div>
                    </Link>
                </div>
                {/* 
                <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">
                    <figure>
                        <img src={HumEff} alt="transparent atelier" className="project-demo-thumbnail" />
                        <figcaption> HummingEffect
                            <br></br>
                            Hum and guess game
                        </figcaption>
                    </figure>
                </Link> */}

                {/* HummingEffect
                <img src={ODBD} alt="odbd" className="project-demo-thumbnail" />
                OnStage
                <img src={ODBD} alt="odbd" className="project-demo-thumbnail" /> */}
            </div>
            <Footer />
        </div >
    )
}
export default Intro;
