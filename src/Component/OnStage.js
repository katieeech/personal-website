import React from "react";
import Footer from "../Component/Footer";
import OSThumbnail from "../Images/OSImage.png";

function OnStage({ history }) {
  return (
    <div className="work-detail-outer">
      <button onClick={() => history.push("/work")}>ᐊ Back </button>
      <div className="underline-div"></div>
      <div className="work-detail-container">
        <div className="work-detail-left-div">
          <h1>OnStage | 온스테이지</h1>
          <h4>
            2021 •{" "}
            <a href="http:" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </h4>
          <img src={OSThumbnail} alt="project display"></img>
        </div>
        <div className="work-detail-right-div">
          <table>
            <tr>
              <td>FRONT</td>
              <td>React</td>
            </tr>
            <tr>
              <td>BACK</td>
              <td>Rails</td>
            </tr>
          </table>

          <p> Work under revision</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default OnStage;
