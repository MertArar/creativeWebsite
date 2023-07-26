import React from "react";
import "./Services.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <h2>What Can We Do?</h2>
        <h1>Services we can help you with</h1>
        <span>
          See All Services <AiOutlineArrowRight />{" "}
        </span>
      </div>
      <div className="services-right">
        <div className="card">
          <div className="card-inner">
            <img src="" alt="" />
          </div>
          <div className="card-inner"></div>
          <div className="card-inner"></div>
          <div className="card-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
