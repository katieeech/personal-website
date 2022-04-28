import React from "react";
import Footer from "./Footer";
import BSThumbnail from "../Images/BS.png";

function BS({ history }) {
  return (
    <div className="work-detail-outer">
      <button onClick={() => history.push("/work")}>ᐊ Back </button>
      <div className="underline-div"></div>
      <div className="work-detail-container">
        <div className="work-detail-left-div">
          <h1>Beauty Selection | 뷰티셀렉션</h1>
          <h4>
            2022 - Present •{" "}
            <a
              href="https://www.beautyselection.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </h4>
          <img src={BSThumbnail} alt="project display"></img>
        </div>
        <div className="work-detail-right-div">
          <table>
            <tr>
              <td>FRONT</td>
              <td>프론트엔드 개발</td>
            </tr>
          </table>

          <p> Work In Progress</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default BS;
