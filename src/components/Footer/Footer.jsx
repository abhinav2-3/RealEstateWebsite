import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="f_wrapper">
      <div className="paddings innerWidth flexCenter f_container">
        {/* Left Side */}
        <div className="flexColStart f_left">
          <img src="./logo2.png" alt="Logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f_right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">226301 MLG, Lucknow, India</span>
          <div className="flexCenter f_menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
