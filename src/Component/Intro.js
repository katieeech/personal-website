import React from "react";
import Footer from "./Footer";
import ODBDThumbnail from "../Images/ODBDThumbnail.png";
import OSThumbnail from "../Images/OSThumbnail.png";
// import HEThumbnail from "../Images/HummingEffect.png"
import TAThumbnail from "../Images/TransparentAtelierThumbnail.png";

import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro-outer-container">
      <div className="intro-div">
        <h1>WELCOME !</h1>
        <h2>
          I am a <span className="fed">front-end developer</span> based in Korea
        </h2>
        <h3>
          {" "}
          I build and design visually compelling and user-friendly interfaces
        </h3>
      </div>

      <div className="from-right"></div>
      <h3>
        /Explore <span className="my-work">My Work!</span>
      </h3>

      <div className="proj-demos-container">
        <div className="proj-demo-thumb-container">
          <Link
            to="/work"
            style={{ textDecoration: "none", color: "#000" }}
            className="proj-demo-link"
          >
            <img src={ODBDThumbnail} alt="odbd" className="proj-demo-img" />
            <div className="proj-thumb-middle">
              <div className="proj-thumb-title">ODBD</div>
            </div>
          </Link>
        </div>

        <div className="proj-demo-thumb-container">
          <Link
            to="/work"
            style={{ textDecoration: "none", color: "#000" }}
            className="proj-demo-link"
          >
            <img src={OSThumbnail} alt="on-stage" className="proj-demo-img" />
            <div className="proj-thumb-middle">
              <div className="proj-thumb-title">OnStage</div>
            </div>
          </Link>
        </div>

        <div className="proj-demo-thumb-container">
          <Link
            to="/work"
            style={{ textDecoration: "none", color: "#000" }}
            className="proj-demo-link"
          >
            <img
              src={TAThumbnail}
              alt="transparent atelier"
              className="proj-demo-img"
            />
            <div className="proj-thumb-middle">
              <div className="proj-thumb-title">Transparent Atelier</div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Intro;
