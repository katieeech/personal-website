import React from "react"
import Footer from "./Footer"
import ODBD from "../Images/ODBDThumbnail.png"
import TA from "../Images/TransparentAtelierThumbnail.png"
import { Link } from "react-router-dom"

function Intro() {
    return (
        <div className="intro-outer-container">
            <div className="intro-div">
                {/* <p className="from-top">top</p> */}
                <h1>WELCOME!</h1>
                <h2>
                    I am a <span className="fed">front-end developer</span> based in New York City
                </h2>
                <h3> I build and design visually compelling and user-friendly interfaces</h3>
            </div>

            <div className="project-demo-thumbnail-container">

                {/* <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} > */}
                <div className="from-right"></div>
                <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">
                    <h3>/Explore My Work</h3>
                    <figure>
                        <img src={ODBD} alt="odbd" className="project-demo-thumbnail" />
                        <figcaption> ODBD
                            <br></br>
                            Music/Podcast streaming app for programmers
                        </figcaption>
                    </figure>
                </Link>

                <Link to="/work" style={{ textDecoration: 'none', color: '#000' }} className="proj-demo-link">

                    {/* Transparent Atelier */}
                    <figure>
                        <img src={TA} alt="transparent atelier" className="project-demo-thumbnail" />
                        <figcaption> Transparent Atelier
                            <br></br>
                            Retail app for eyewears
                        </figcaption>
                    </figure>
                </Link>
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
