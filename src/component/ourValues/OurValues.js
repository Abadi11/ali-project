import { Typography } from "@mui/material";
import OurValuesHome from "../../asset/ourValues/ourValuesHome.JPG";
import KeysValues1 from "../../asset/ourValues/keysValues.JPG";
import KeysValues2 from "../../asset/ourValues/keysValues2.JPG";

import "./OurValues.css";

function OurValues() {
  return (
    <div className="our-values-component">
      <div className="our-values-header-container">
        <Typography variant="h4">Our Values in-depth</Typography>
        <img src={OurValuesHome} alt="our-values-home" width="50%" />
      </div>

      <div className="industries-body-container">
        <img src={KeysValues1} alt="our-values-keys-01" width="90%" />
        <img src={KeysValues2} alt="our-values-keys-02" width="90%" />
      </div>
    </div>
  );
}

export default OurValues;
