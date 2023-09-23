import React from 'react'
import homePageImage from "../../asset/home-page-imag.PNG";
import { Typography } from "@mui/material";
import HowWeWork from './howWeWork/HowWeWork';

import "./HomeBody.css"

function HomeBody() {
  return (
    <div className="home-body-component">
      <div className="home-body-header-container">
        <div className="home-body-header-description">
          <Typography variant="h3">Welcome ...!</Typography>
          <Typography variant="h6">
            Are you looking for company which treat your shipment as their own
            stuff,{" "}
            {<b style={{ color: "rgb(250, 67, 6)" }}>You have arrived</b>}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: "inline-block" }}
          ></Typography>
        </div>

        <img src={homePageImage} alt="home-page" width={"50%"} />
      </div>
      <div className="how-we-work-component">
        <HowWeWork />
      </div>
    </div>
  );
}

export default HomeBody