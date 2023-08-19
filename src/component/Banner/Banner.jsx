import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner" >
      <Container
        sx={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: "25px",
          justifyContent: "space-around",
          alignItems: "center",
        }} 
      >
        <div
          className="tagLine"
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "montserrat",
              marginBottom: "15px",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "darkgray",
              textTransform: "uppercase",
              fontFamily: "montserrat",
            }}
          >
            Get all info regarding your favorite crypto currency
          </Typography>
        </div>
        <Carousel />
        </Container>
    </div>
  );
};

export default Banner;
