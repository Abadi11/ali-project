import React from "react";
import aboutUs1 from "../../asset/aboutUs/aboutUs1.JPG";
import aboutUs6 from "../../asset/aboutUs/aboutUs6.JPG";
import VisionMissionPhoto from "../../asset/aboutUs/visionMissionContainer.JPG";
import CardCustomised from "./whoWeAre/CardCustomised";
import { Typography } from "@mui/material";
import VisionMission from "./visionMission/VisionMission";
import CultureStrength from "./cultureStrength/CultureStrength";

import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <Typography variant="h2">About Us</Typography>
        <img src={aboutUs1} alt="about-us-page" width={"50%"} />
      </div>
      <div className="cards-container">
        <div className="cards-container-header">
          <Typography variant="h4">Who We Are</Typography>
        </div>

        <div className="cards-container-body">
          <CardCustomised />
        </div>
      </div>

      <div className="vision-mission-component">
        <VisionMission />
        <img src={VisionMissionPhoto} alt="about-us-page" width={"40%"} />
      </div>

      <div className="culture-strength-component">
        <CultureStrength />
      </div>
      <img src={aboutUs6} alt="about-us-page" width={"80%"} />
    </div>
  );
}

export default AboutUs;
