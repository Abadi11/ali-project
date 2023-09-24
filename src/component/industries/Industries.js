import { Typography } from "@mui/material";
import IndustriesHome from "../../asset/industries/industriesHome.JPG";
import IndustriesSteps1 from "../../asset/industries/industriesSteps.JPG";
import IndustriesSteps2 from "../../asset/industries/industriesSteps2.JPG";


import "./Industries.css"
function Industries() {
  return (
    <div className="industries-component">
      <div className="industries-header-container">
        <Typography variant="h4">Industries</Typography>
        <img src={IndustriesHome} alt="industries-home" width="50%" />
      </div>

      <div className="industries-body-container">
        <img src={IndustriesSteps1} alt="industries-steps-01" width="90%" />
        <img src={IndustriesSteps2} alt="industries-steps-02" width="90%" />
      </div>
    </div>
  );
}

export default Industries