import React from "react"
import Footer from "../Component/Footer"
// import ProfilePic1 from "../Images/IMG_7880.jpg"
import ProfilePic2 from "../Images/IMG_9319.jpg"
function About() {

    return (
        <div className="about-container">
            <h2>About</h2>
            <div className="underline-div"></div>
            {/* <img src={ProfilePic1}></img> */}
            {/* <p>Katie H Choi is a front-end/UX developer</p> */}
            <div className="profile">
                <div className="profile-right-img-container">
                    <img src={ProfilePic2} alt="profile"></img>
                </div>

                <div className="profile-left">
                    <p>Hi, I am Katie Hyewon Choi, a front-end developer in New York City.
                        I love building and designing compelling user experiences.
                        My main expertise is in front-end development but UX/UI design has always been my interest as well.
                        I am a fast learner and truly enjoy teaching myself new skills and languages.
                        When I'm away from my computer, I like traveling, running, going to concerts, and taking photos.

                    </p>
                    <ul className="edu">
                        <li> Education</li>
                        <li>Flatiron School - Software Engineering. Full Stack (2021)</li>   
                        <li>Columbia University - MS Biostatistsics (2019)</li>
                        <li>Syracuse University - BA Economics (2016)</li>
                    </ul>
                    <div className="skills-container">
                        <ul className="skills-dev">
                            <li>Skills - development</li>
                            <li> JavaScript, React, Redux, Thunk, </li>
                            <li>Semantic HTML, CSS</li>
                            <li>Ruby on Rails, PostgreSQL</li>
                        </ul>
                        <ul className="skills-design">
                            <li>Skills - design</li>
                            <li>Figma</li>
                        </ul>
                        <ul className="skills-data">
                            <li>Skills - data analysis</li>
                            <li> R, SAS</li>
                        </ul>
                        <ul className="skills-learning">
                            <li>Skills - currently learning</li>
                            <li>React Native, TypeScript, Advanced Figma</li>
                        </ul>
                        <ul className="skills-lang">
                            <li>Languages</li>
                            <li>English, Korean</li>
                        </ul>
                    </div>


                </div>


            </div>

            <div className="underline-div"></div>


            <Footer />
        </div >

    )
}
export default About;

