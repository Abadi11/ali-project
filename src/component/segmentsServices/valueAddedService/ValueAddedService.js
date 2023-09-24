import { Typography } from '@mui/material';
import MainPointsLogoWhite from "../../../asset/mainPointsLogoWhite.JPG";
import ValueAddedServicePhoto from "../../../asset/segmentsServices/valueAddedServicePhoto.JPG";

import "./ValueAddedService.css"
import { paymentGuarantee, suppliersGoodsInspections, taxRefund } from '../constants';
function ValueAddedService() {
  return (
    <div className="value-added-service-component">
      <div className="value-added-service-component-container">
        <div className="suppliers-goods-inspection-card">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Suppliers & Goods Inspection
          </Typography>
          <div className="value-added-description">
            <img
              src={MainPointsLogoWhite}
              alt="main-points-logo"
              width="20rem"
            />
            <Typography variant="body">{suppliersGoodsInspections}</Typography>
          </div>
        </div>
        <div className="tax-refund-card">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Tax Refund
          </Typography>
          <div className="value-added-description">
            <img
              src={MainPointsLogoWhite}
              alt="main-points-logo"
              width="20rem"
            />
            <Typography variant="body">{taxRefund}</Typography>
          </div>
        </div>
        <div className="payment-guarantee-card">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Payment Guarantee
          </Typography>
          <div className="value-added-description">
            <img
              src={MainPointsLogoWhite}
              alt="main-points-logo"
              width="20rem"
            />
            <Typography variant="body">{paymentGuarantee}</Typography>
          </div>
        </div>
      </div>
      <img src={ValueAddedServicePhoto} alt="value-added-service" width="99%" />
    </div>
  );
}

export default ValueAddedService