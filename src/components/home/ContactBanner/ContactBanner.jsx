import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import banner from "../../../assets/stats.jpeg";

import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <img src={banner} alt="" />
      <div className="contact-banner-content">
        <h1>
          Let's disscuse make <br /> something <i>cool</i> together
        </h1>
        <span>
          Apply For Meeting <AiOutlineArrowRight />
        </span>
      </div>
    </div>
  );
};

export default ContactBanner;
