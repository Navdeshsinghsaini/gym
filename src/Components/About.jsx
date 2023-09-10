import React from "react";
import aboutimage from "../images/about.png"
function About () {
    return (
        <div id="about" >

            <div className="about-image">
                <img src={aboutimage} alt="aboutpagelogo" />
            </div> 
            <div className="about-text">
                <h1>LEARN MORE ABOUT US...!</h1>
                <p>The training abilities you cater to will play a part in who joins your gym.
                     If you focus on high performance and improving personal bests in a specific area,
                      an entry-level gym-goer isn’t going to sign up.
                       While it’s important to niche down,
                     having options for various training abilities is useful
                      when creating a welcoming and accessible environment. </p>
                <button>READ MORE</button>
            </div>
               
        </div>
    )
}

export default About;