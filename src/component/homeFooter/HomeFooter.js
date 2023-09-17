import React from 'react'
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./HomeFooter.css"

function HomeFooter() {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <h1>Contact</h1>
        <h3>
          <pre>{"With Our Company \nAMS APEX \nAAC"}</pre>
        </h3>
      </div>
      <div className="footer-body">
        <div className="footer-left-tape"></div>
        <div className="footer-contact-details">
          <div className="detail">
            <AlternateEmailIcon fontSize="none" sx={{ mr: 4 }} />
            <span>tala.saif@amsaif.com</span>
          </div>

          <div className="detail">
            <PhoneIcon fontSize="none" sx={{ mr: 4 }} />
            <span>0086 15 692404669 / 0086 20 83057840</span>
          </div>

          <div className="detail">
            <LocationOnIcon fontSize="none" sx={{ mr: 4 }} />
            <pre>{"AMS APEX CO., Limited \n2607 Shangfeng Building, 374-3 Beijing Road, Yuexiu District, Guangzhou, China"}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter