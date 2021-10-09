import React from "react"
import { Link } from "react-router-dom";
import entrance_logo from "../Images/entrance_name.jpg"

function Home() {
    return (
        <div className="home-container">
            <Link to="/intro" style={{ textDecoration: 'none' }} className="entrance-logo-link" >
                {/* <button> */}
                {/* KatieHChoi */}
                <img src={entrance_logo} alt="katie.h.choi" className="entrance-logo"></img>
                {/* </button> */}
            </Link>

        </div>

    )
}
export default Home;