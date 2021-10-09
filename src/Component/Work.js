import React from "react";
import Footer from "./Footer";
import ODBDThumbnail from "../Images/ODBDThumbnail.png";
import TAThumbnail from "../Images/TransparentAtelierThumbnail.png";
import HEThumbnail from "../Images/HummingEffect.png";
import OSThumbnail from "../Images/OSThumbnail.png";


function Work({ history }) {
    return (
        <div className="work-outer-container">
            <h1>WORK</h1>
            <div className="work-outer-div">
                <div className="work-inner">
                    <div>
                        <img src={ODBDThumbnail} alt="odbd" className="proj-img"
                            onClick={() => history.push("/work/odbd")} />
                    </div>
                    <div>
                        <img src={HEThumbnail} alt="humming effect" className="proj-img"
                            onClick={() => history.push("work/humming-effect")} />
                    </div>
                    <div>
                        <img src={TAThumbnail} alt="transparent atelier" className="proj-img"
                            onClick={() => history.push("work/transparent-atelier")} />
                    </div>

                    <div>
                        <img src={OSThumbnail} alt="on stage" className="proj-img"
                            onClick={() => history.push("work/on-stage")} />
                    </div>


                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Work;