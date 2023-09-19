import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { cardContents } from "../cardContents";
import { thanksText } from "../cardContents";
import mainPointLogo from "../../../asset/main-points-logo.JPG";

function CardCustomised() {
  return (
    <>
      {cardContents["Who We Are"].map((content, index) => (
        <>
          <Card
            variant="none"
            className="card-container"
            key={`who-we-are-card$-${index}`}
            sx={{ width: "35%" }}
          >
            <img
              src={mainPointLogo}
              alt={`who-we-are-card-${index}`}
              width="20rem"
              height="20rem"
            />

            <CardContent
              sx={{ p: 0, textAlign: "justify", wordBreak: "break-word" }}
            >
              <Typography variant="body1">{content}</Typography>
            </CardContent>
          </Card>
        </>
      ))}

      <Typography
        variant="body1"
        sx={{ textAlign: "justify", wordBreak: "break-word", gap: "0.5rem" }}
      >
        <img
          src={mainPointLogo}
          alt={`who-we-are-card-thanks`}
          width="20rem"
          height="20rem"
        />
        {thanksText}
      </Typography>
    </>
  );
}

export default CardCustomised;
