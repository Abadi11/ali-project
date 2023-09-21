import React from 'react'
import homePageImage from "../../asset/home-page-imag.PNG";
import { Typography } from "@mui/material";
import HowWeWork from './howWeWork/HowWeWork';

import "./HomeBody.css"

function HomeBody() {
  return (
    <div className="home-body-component">
      <div className="home-body-photo">
        <Typography variant="h3">Welcome ...!</Typography>
        <img src={homePageImage} alt="home-page" width={"50%"}/>
      </div>
      <div className="how-we-work-component">
        <HowWeWork />
      </div>
    </div>
  );
}

export default HomeBody