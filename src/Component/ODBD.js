import React from "react";
import Footer from "../Component/Footer";
import Odbd from "../Images/ODBDThumbnail.png";


function ODBD({ history }) {
    return (
        <div className="work-detail-outer">
            <button onClick={() => history.push("/work")}>ᐊ Back </button>
            <div className="underline-div"></div>
            <div className="work-detail-container">
                <div className="work-detail-left-div">
                    <h1>ODBD</h1>
                    <h4>2021 • <a href="https://youtu.be/NqbCXmmJ2oc" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/katiehyewonchoi/ODBD-App" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
                    {/* <div className="proj-img-wrapper"> */}
                    <img src={Odbd} alt="project display"></img>
                    {/* </div> */}
                </div>
                <div className="work-detail-right-div">
                    <table>
                        <tr>
                            <td>FRONT</td>
                            <td>React, Redux, Thunk</td>
                        </tr>
                        <tr>
                            <td>BACK</td>
                            <td>Rails, PostgreSQL</td>
                        </tr>
                        <tr>
                            <td>DESIGN</td>
                            <td>Figma</td>
                        </tr>
                    </table>

                    <p> <strong>ODBD</strong> is a music streaming service app for programmers, which offers digital copyright restricted recorded music from Spotify and various podcasts for developers/engineers. You can listen to different playlists of tracks depending on your current mood. ODBD provides a podcast channel for each user for uploading podcast episodes.</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default ODBD;