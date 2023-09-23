import React from 'react'
import { Typography, Paper } from "@mui/material";
import mainPointsLogoBlue from "../../asset/mainPointsLogoBlue.JPG"
import mainPointsLogo from "../../asset/main-points-logo.JPG";
import SegmentsServicesPhoto from "../../asset/segmentsServices/segmentsServicesHome.JPG"
import SeaShipping from "../../asset/segmentsServices/seaShipping.JPG";
import AirShipment from "../../asset/segmentsServices/airShipment.JPG";

import "./SegmentsServices.css"
import { airShipment, seaShipping } from './constants';
function SegmentsServices() {
  return (
    <div className="segments-services-component">
      <div className="segments-services-header-container">
        <Typography variant="h3">Segments & Services</Typography>
        <img
          src={SegmentsServicesPhoto}
          alt="segments-services-home"
          width={"40%"}
        />
      </div>
      <div className="segments-services-body-container">
        <Paper elevation={2} sx={{ p: 3 }}>
          <div className="transportation-header-container">
            <img src={mainPointsLogoBlue} alt="main-point-logo" width="20rem" />
            <Typography variant="h4">Transportation</Typography>
          </div>
          {/* Sea Shipping FCL, LCL */}
          <div className="ss-card-container-sea-shipping">
            <div className="ss-card-container-body">
              <Typography variant="h5">Sea Shipping FCL, LCL</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{seaShipping}</Typography>
              </div>
            </div>
            <img
              src={SeaShipping}
              alt="sea-shipping-background"
              width={"99%"}
            />
          </div>

          {/* Air Shipment */}
          <div className="ss-card-container-air-shipment">
            <div className="ss-card-container-body">
              <Typography variant="h5">Air Shipment</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{airShipment}</Typography>
              </div>
            </div>
            <img
              src={AirShipment}
              alt="air-shipment-background"
              width={"99%"}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default SegmentsServices