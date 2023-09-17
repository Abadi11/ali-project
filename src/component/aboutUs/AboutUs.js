import React from 'react'
import aboutUsPhoto from "../../asset/AboutUs.JPG"

import "./AboutUs.css"

function AboutUs() {
  return (
    <div className="about-us-container">
      <img src={aboutUsPhoto} alt="about-us-page" width={"50%"} />
    </div>
  );
}

export default AboutUs