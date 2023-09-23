import React from 'react'
import { Typography, Paper } from "@mui/material";
import SegmentsServicesPhoto from "../../asset/segmentsServices/segmentsServicesHome.JPG"

import "./SegmentsServices.css"
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
        <Paper elevation={2} sx={{ p: 3 }}></Paper>
      </div>
    </div>
  );
}

export default SegmentsServices