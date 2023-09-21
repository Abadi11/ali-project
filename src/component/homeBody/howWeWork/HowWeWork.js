import React from "react";
import { Typography, Paper } from "@mui/material";
import PhotoBetweenBookingAndPickup from "../../../asset/howWeAre/photoBetween1&2.JPG";

import "./HowWeWork.css";
import { booking, howWeWork, pickup, warehousingInspectionLabelling } from "../contexts";
function HowWeWork() {
  return (
    <div className="how-we-work-container">
      <Paper elevation={2} sx={{p:3}}>
        <div className="how-we-work-title">
          <Typography variant="h4" sx={{fontWeight: "bold"}}>How We Work</Typography>
        </div>
        <div className="how-we-work-introduction">
          <Typography variant="h6" sx={{lineHeight: "24px", textAlign: "justify", wordBreak: "break-word"}}>{howWeWork}</Typography>
        </div>
        <div className="how-we-work-booking-pickup-container">
          <div className="booking-01-container">
            <div className="booking-01">
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", pt: 1 }}
              >
                Booking
              </Typography>
              <Typography
                variant="body"
              >
                {booking}
              </Typography>
            </div>
          </div>

          <div className="photo-between-booking-pickup">
            <img
              src={PhotoBetweenBookingAndPickup}
              alt="booking-pickup"
              width={"99%"}
            />
          </div>
          <div className="pickup-02-container">
            <div className="pickup-02">
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", pt: 1 }}
              >
                Pickup
              </Typography>
              <Typography variant="body">{pickup}</Typography>
            </div>
          </div>
        </div>
        <div className="warehouse-inspection-labelling-03-container">
          <div className="warehouse-inspection-labelling-03">
            <Typography variant="h5" align="left">
              Warehousing & Inspection & Labelling
            </Typography>
            <Typography variant="body">
              {warehousingInspectionLabelling}
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default HowWeWork;
