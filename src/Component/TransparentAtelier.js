import React from "react";
import Footer from "../Component/Footer";
import TAThumbnail from "../Images/TransparentAtelierThumbnail.png";


function TransparentAtelier({ history }) {
    return (
        <div className="odbd-outer-container">
            <button onClick={() => history.push("/work")}>ᐊ Back </button>
            <div className="underline-div"></div>
            <div className="work-detail-container">
                <div className="work-detail-left-div">
                    <h1>Transparent Atelier</h1>
                    <h4>2021 • <a href="http:" target="_blank" rel="noopener noreferrer">Demo</a> • <a href="https://github.com/katiehyewonchoi/Transparent-Atelier" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
                    <img src={TAThumbnail} alt="project display"></img>
                </div>
                <div className="work-detail-right-div">
                    <table>

                        <tr>
                            <td>FRONT</td>
                            <td>React</td>
                        </tr>
                        <tr>
                            <td>BACK</td>
                            <td>JSON Server</td>
                        </tr>

                    </table>

                    <p> Transparent Atelier is a mock online store for eyewears.
                        Users can filter items by sunglasses and eyeglasses upon their arrival to the app. Users can filter for different brands, lenses, materials, colors, etc.
                        It allows users to view each item in detail and comment on items. Users' selected eyewears stay in their cart and there is a special helper feature which narrows their selection down.
                    </p>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default TransparentAtelier;