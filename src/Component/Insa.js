import React from "react";
import Footer from "../Component/Footer";
import INSAThumbnail from "../Images/INSAThumbnail.png";

function Insa({ history }) {
  return (
    <div className="work-detail-outer">
      <button onClick={() => history.push("/work")}>ᐊ Back </button>
      <div className="underline-div"></div>
      <div className="work-detail-container">
        <div className="work-detail-left-div">
          <h1>Insa | 인사</h1>
          <h4>
            2022 •{" "}
            <a
              href="https://www.insapp.io/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>{" "}
            •{" "}
            <a
              href="https://apps.apple.com/us/app/insa-stay-connected/id1569923844"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
          </h4>
          <img src={INSAThumbnail} alt="project display"></img>
        </div>
        <div className="work-detail-right-div">
          <table>
            <tr>
              <td>FRONT</td>
              <td>React Native, Redux</td>
            </tr>
            <tr>
              <td>BACK</td>
              <td>Node JS, Golang, Express, Gin</td>
            </tr>
            <tr>
              <td>DESIGN</td>
              <td>Figma</td>
            </tr>
          </table>

          <p>
            {" "}
            <strong>Insa</strong> is an app service to ease and simplify family
            communication. <strong>인사</strong>는 소중한 사람들과의
            커뮤니케이션을 향상시키고 간편하게 가족과 소통 할 수 있게 돕는
            모바일 앱입니다.
          </p>
          <p>
            2022년 1월부터 TypeScript와 React Native를 사용해 프론트엔드 개발에
            참여하고 있습니다. 2022년 3월에 Insa 0.6.1 버전 배포에 기여했습니다.
            Figma로 직접 UI component 디자인 작업을 했습니다.
          </p>

          <p>*더 자세한 내용 및 경력기술서는 포트폴리오에서 보실 수 있습니다</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Insa;
