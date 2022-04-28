import React from "react";
import Footer from "./Footer";
import INSAThumbnail from "../Images/INSAThumbnail.png";
import ODBDThumbnail from "../Images/ODBDThumbnail.png";
import BSThumbnail from "../Images/BS.png";

function Work({ history }) {
  return (
    <div className="work-outer-container">
      <h1>WORK</h1>
      <div className="work-outer-div">
        <div className="work-inner">
          <div>
            <img
              src={BSThumbnail}
              alt="BS"
              className="proj-img"
              onClick={() => history.push("work/beauty-selection")}
            />
          </div>
          <div>
            <img
              src={INSAThumbnail}
              alt="Insa app"
              className="proj-img"
              onClick={() => history.push("/work/insa")}
            />
          </div>
          <div>
            <img
              src={ODBDThumbnail}
              alt="odbd"
              className="proj-img"
              onClick={() => history.push("/work/odbd")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;
