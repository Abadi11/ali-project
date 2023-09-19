import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import mainPointsLogoWhite from "../../../asset/mainPointsLogoWhite.JPG";
import cultureStrengthPhoto from "../../../asset/aboutUs/cultureStrengthPhoto.JPG";

import { culture, strength } from '../cardContents';
import "./CultureStrength.css"


function CultureStrength() {
  return (
    <div className="culture-strength-component-container">
      <div className="culture-strength-container">
        <div className="culture-container">
          <Typography variant="h4" sx={{ pb: 2, color: "rgb(250, 67, 6)" }}>
            Culture
          </Typography>
          <Card variant="none" className="culture-card">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                src={mainPointsLogoWhite}
                alt={`vision-card`}
                width="20rem"
                height="20rem"
              />

              <CardContent
                sx={{ p: 0, textAlign: "justify", wordBreak: "break-word" }}
              >
                <Typography variant="body1">{culture}</Typography>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="strength-container">
          <Typography variant="h4" sx={{ pb: 2, color: "rgb(250, 67, 6)" }}>
            Strength
          </Typography>
          <Card variant="none" className="strength-card">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <img
                src={mainPointsLogoWhite}
                alt={`vision-card`}
                width="20rem"
                height="20rem"
              />

              <CardContent
                sx={{ p: 0, textAlign: "justify", wordBreak: "break-word" }}
              >
                <Typography variant="body1">{strength}</Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <div className="culture-strength-photo">
        <img
          src={cultureStrengthPhoto}
          alt="culture-strength-page"
          width={"99%"}
        />
      </div>
    </div>
  );
}

export default CultureStrength