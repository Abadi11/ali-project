import React from 'react'
import { Typography, Paper } from "@mui/material";
import mainPointsLogoBlue from "../../asset/mainPointsLogoBlue.JPG"
import mainPointsLogo from "../../asset/main-points-logo.JPG";
import SegmentsServicesPhoto from "../../asset/segmentsServices/segmentsServicesHome.JPG"
import SeaShipping from "../../asset/segmentsServices/seaShipping.JPG";
import AirShipment from "../../asset/segmentsServices/airShipment.JPG";
import LocalTransportation from "../../asset/segmentsServices/localTransportation.JPG";
import ProjectCargoLogistics from "../../asset/segmentsServices/projectCargoLogistics.JPG";
import AtHeavyEquipmentLogistics from "../../asset/segmentsServices/atHeavyEquipmentLogistics.JPG";
import OrderManagementFulfillments from "../../asset/segmentsServices/orderManagementFulfillments.JPG";
import ContractLogistics from "../../asset/segmentsServices/contractLogistics.JPG";
import WarehousingStorage from "../../asset/segmentsServices/warehousingStorage.JPG";

import "./SegmentsServices.css"
import { airShipment, atHeavyEquipmentLogistics, contractLogistics, localTransportation, orderManagementFulfillments, projectCargoLogistics, seaShipping, warehousingStorage } from './constants';
import ValueAddedService from './valueAddedService/ValueAddedService';
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
          {/* Transportation Section */}
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

          {/* Local Transportation */}
          <div className="ss-card-container-local-transportation">
            <div className="ss-card-container-body-local-transportation">
              <Typography variant="h5">Local Transportation</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{localTransportation}</Typography>
              </div>
            </div>
            <img
              src={LocalTransportation}
              alt="local-transportation-background"
              width={"99%"}
            />
          </div>

          {/* Project Cargo Logistics */}
          <div className="ss-project-cargo-logistics-card-container">
            <div className="ss-project-cargo-logistics-card-container-body">
              <Typography variant="h5">Project Cargo Logistics</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{projectCargoLogistics}</Typography>
              </div>
            </div>
            <img
              src={ProjectCargoLogistics}
              alt="project-cargo-logistics-background"
              width={"99%"}
            />
          </div>

          {/* At Heavy Equipment Logistics (ahel)*/}
          <div className="ahel-ss-card-container">
            <div className="ahel-ss-card-container-body">
              <Typography variant="h5">Sea Shipping FCL, LCL</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">
                  {atHeavyEquipmentLogistics}
                </Typography>
              </div>
            </div>
            <img
              src={AtHeavyEquipmentLogistics}
              alt="ahel-background"
              width={"99%"}
            />
          </div>
        </Paper>

        {/* Supply Chain */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <div className="supply-chain-header-container">
            <img src={mainPointsLogoBlue} alt="main-point-logo" width="20rem" />
            <Typography variant="h4">Supply Chain</Typography>
          </div>

          {/* Order Management & Fulfillments (omf)*/}
          <div className="ss-omf-card-container">
            <div className="ss-omf-card-container-body">
              <Typography variant="h5">
                Order Management & Fulfillments
              </Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">
                  {orderManagementFulfillments}
                </Typography>
              </div>
            </div>
            <img
              src={OrderManagementFulfillments}
              alt="omf-background"
              width={"99%"}
            />
          </div>

          {/* Contract Logistics (cl) */}
          <div className="ss-cl-card-container-sea-shipping">
            <div className="ss-cl-card-container-body">
              <Typography variant="h5">Contract Logistics</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{contractLogistics}</Typography>
              </div>
            </div>
            <img src={ContractLogistics} alt="cl-background" width={"99%"} />
          </div>

          {/* Warehousing & Storage (ws) */}
          <div className="ss-ws-card-container">
            <div className="ss-ws-card-container-body">
              <Typography variant="h5">Warehousing & Storage</Typography>
              <div className="ss-card-container-body-description">
                <img src={mainPointsLogo} alt="main-point-logo" width="20rem" />
                <Typography variant="body">{warehousingStorage}</Typography>
              </div>
            </div>
            <img src={WarehousingStorage} alt="ws-background" width={"99%"} />
          </div>
        </Paper>

        {/* Value & Added Service */}
        <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
          <div className="value-added-service-header-container">
            <img src={mainPointsLogoBlue} alt="main-point-logo" width="20rem" />
            <Typography variant="h4">Value-Added Service</Typography>
          </div>
          <ValueAddedService />
        </Paper>
      </div>
    </div>
  );
}

export default SegmentsServices