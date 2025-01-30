import React from "react";
import "./TopBanner.css";
import bannerImage from "../../assets/card_img_1.jpeg";
import Button from "@mui/material/Button";

const Topbanner = () => {
  return (
    <div className="top-banner">
      <div className="banner-content">
        <div className="offer-text">
          <h1>Up to</h1>
          <h2>30 % Off</h2>
        </div>
        <div className="banner-info">
          <p>ON ALL AUTUMN FASHION WEAR</p>
          {/* <button className="shop-button">Shop now</button> */}
          <div className="AutumnBanner_shop_button">
            <Button variant="contained" style={{ backgroundColor: "#a8865c" }}>
              Shop now
            </Button>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <div className="banner-image-container">
          <img
            src={bannerImage}
            alt="Children wearing autumn fashion"
            className="fashion-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
