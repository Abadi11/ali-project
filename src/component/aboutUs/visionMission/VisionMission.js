import React from 'react'
import { cardContents } from '../cardContents';
import { Card, CardContent, Typography } from "@mui/material";
import mainPointLogo from "../../../asset/main-points-logo.JPG"
import VisionLogo from "../../../asset/aboutUs/vision.JPG"
import MissionLogo from "../../../asset/aboutUs/mission.JPG";

import "./VisionMission.css"

function VisionMission() {
  return (
    <div className="vision-mission-card-container">
        <Typography variant="h4">
          Vision
        </Typography>
        <Card
          variant="none"
          className="vision-mission-card"
          
        >
          <div style={{ display: "flex" }}>
            <img
              src={mainPointLogo}
              alt={`vision-card`}
              width="20rem"
              height="20rem"
            />

            <CardContent
              sx={{ p: 0, textAlign: "justify", wordBreak: "break-word" }}
            >
              <Typography variant="body1">{cardContents["Vision"]}</Typography>
            </CardContent>
          </div>

          <img
            src={VisionLogo}
            alt={`vision-card`}
            width="80rem"
            height="80rem"
          />
        </Card>
        <Typography variant="h4">
          Mission
        </Typography>
        <Card
          variant="none"
          className="vision-mission-card"
        >
          <div style={{ display: "flex" }}>
            <img
              src={mainPointLogo}
              alt={`vision-card`}
              width="20rem"
              height="20rem"
            />

            <CardContent
              sx={{ p: 0, textAlign: "justify", wordBreak: "break-word" }}
            >
              <Typography variant="body1">
                {cardContents["Mission"]}
              </Typography>
            </CardContent>
          </div>
          <img
            src={MissionLogo}
            alt={`vision-card`}
            width="80rem"
            height="80rem"
          />
        </Card>
    </div>
  );
}

export default VisionMission;