import React from "react";

function FeatureBox (props) {
    
    return(
        <div className="a-box">
              <div className="a-b-img">
                   <img src={props.image} alt="feature-box-logo"/>
              </div>

              <div className="a-b-text" >
                <h2>{props.title}</h2>
                <p>Muscles Are Waiting To Get Pumped</p>
              </div>
        </div>
    )
     
}

export default FeatureBox;