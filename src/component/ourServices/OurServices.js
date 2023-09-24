import React from 'react'
import OurServicesPhoto from "../../asset/ourServices/ourServices.JPG";

import "./OurServices.css"
function OurServices() {
  return (
    <div className="our-services-component">
      <img src={OurServicesPhoto} alt="our-services" width="70%" />
    </div>
  );
}

export default OurServices