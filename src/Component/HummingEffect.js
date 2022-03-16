import React from "react";
import Footer from "../Component/Footer";
import HEThumbnail from "../Images/HummingEffect.png";

function HummingEffect({ history }) {
  return (
    <div className="work-detail-outer">
      <button onClick={() => history.push("/work")}>ᐊ Back </button>
      <div className="underline-div"></div>
      <div className="work-detail-container">
        <div className="work-detail-left-div">
          <h1>HummingEffect | 허밍이펙트</h1>
          <h4>
            2021 •{" "}
            <a
              href="https://youtu.be/UzNjQaHHbcA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/katiehyewonchoi/HummingEffect-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend
            </a>
            •{" "}
            <a
              href="https://github.com/katiehyewonchoi/HummingEffect-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend
            </a>
          </h4>
          <img src={HEThumbnail} alt="project display"></img>
        </div>
        <div className="work-detail-right-div">
          <table>
            <tr>
              <td>FRONT</td>
              <td>React</td>
            </tr>
            <tr>
              <td>BACK</td>
              <td>Rails, PostgreSQL</td>
            </tr>
          </table>

          <p>
            {" "}
            <strong>HummingEffect</strong> is a humming game that can be played
            with at least two players who like music. Players choose decades of
            songs to hum and a number of rounds to play. First player picks a
            song from a list of four songs presented and starts humming it.
            Other players will guess the song and receive points if guessed
            correctly. The game is loaded with about 6000 songs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HummingEffect;
