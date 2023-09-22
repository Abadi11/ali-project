import React from "react";
import { Typography, Paper } from "@mui/material";
import PhotoBetweenBookingAndPickup from "../../../asset/howWeAre/photoBetween1&2.JPG";
import LoadingBackground from "../../../asset/howWeAre/4loadingBackground.JPG";
import TransportBackground from "../../../asset/howWeAre/5Transport.JPG";
import DocumentationBackground from "../../../asset/howWeAre/6Documentation.JPG";
import TransitBackground from "../../../asset/howWeAre/7Transit.JPG";
import ArrivalAtDestinationBackground from "../../../asset/howWeAre/8Arrival.JPG";
import DeliveryBackground from "../../../asset/howWeAre/9Delivery.JPG";

import "./HowWeWork.css";
import { arrivalAtDestination, booking, delivery, documentation, howWeWork, loading, pickup, transit, warehousingInspectionLabelling } from "../contexts";
function HowWeWork() {
  return (
    <div className="how-we-work-container">
      <Paper elevation={2} sx={{ p: 3 }}>
        <div className="how-we-work-title">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            How We Work
          </Typography>
        </div>
        <div className="how-we-work-introduction">
          <Typography
            variant="h6"
            sx={{
              lineHeight: "24px",
              textAlign: "justify",
              wordBreak: "break-word",
            }}
          >
            {howWeWork}
          </Typography>
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
              <Typography variant="body">{booking}</Typography>
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
        {/* The second page of How we work */}
        <div className="loading-transport-documentation-transit-arrivalAtDestination-delivery-container">
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", position: "absolute", m: 1 }}
              >
                Loading
              </Typography>
              <img
                src={LoadingBackground}
                alt="loading-background"
                width={"99%"}
              />
              <Typography variant="body" p={1.5}>
                {loading}
              </Typography>
            </div>
          </div>
          {/* 05 - Transport */}
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold", position: "absolute", m: 1 }}
              >
                Transport
              </Typography>
              <img
                src={TransportBackground}
                alt="transport-background"
                width={"99%"}
              />
              <Typography variant="body" p={1.5}>
                {transit}
              </Typography>
            </div>
          </div>
          {/* 06 - Documentation */}
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  ml: 5,
                  mt: 0.8,
                }}
              >
                Documentation
              </Typography>
              <img
                src={DocumentationBackground}
                alt="documentation-background"
                width={"99%"}
                style={{ paddingTop: "5px" }}
              />
              <Typography variant="body" p={1.5}>
                {documentation}
              </Typography>
            </div>
          </div>
          {/* 07 - Transit */}
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  ml: 5,
                  mt: 5,
                }}
              >
                Transit
              </Typography>
              <img
                src={TransitBackground}
                alt="transit-background"
                width={"99%"}
                style={{ paddingTop: "2rem" }}
              />
              <Typography variant="body" p={1.5}>
                {transit}
              </Typography>
            </div>
          </div>
          {/* 08 - Arrival At Destination */}
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  ml: 5,
                  mt: 0.8,
                  width: "10%",
                }}
              >
                Arrival At Destination
              </Typography>
              <img
                src={ArrivalAtDestinationBackground}
                alt="arrival-at-destination-background"
                width={"99%"}
                style={{ paddingTop: "2.5rem" }}
              />
              <Typography variant="body" p={1.5}>
                {arrivalAtDestination}
              </Typography>
            </div>
          </div>
          {/* 09 - Delivery */}
          <div className="card-container-template">
            <div className="how-we-work-card-container">
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  position: "absolute",
                  ml: 5,
                  mt: 4.5,
                }}
              >
                Delivery
              </Typography>
              <img
                src={DeliveryBackground}
                alt="delivery-background"
                width={"99%"}
                style={{ paddingTop: "2rem" }}
              />
              <Typography variant="body" p={1.5}>
                {delivery}
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default HowWeWork;
