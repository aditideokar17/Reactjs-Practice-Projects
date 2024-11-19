import React from "react";
import ReactDOM from "react-dom/client";
import Photo from "./assets/photo.jpg";

import Twitter from "./assets/twitter.png";
import Instagram from "./assets/instagram.png";
import Linekdin from "./assets/linkedin.png";

//Profile Card Component
const ProfileCard = () =>{
    return(

        <div className="profile-card">
        <img src={Photo} alt="profile-photo" />

        <h1>Nancy Warner</h1>
        <h3>@nancywarner19</h3>

        <div className="icons">
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linekdin} alt="" />
        </div>
        </div>
    )
};

//Rendering 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ProfileCard/>);