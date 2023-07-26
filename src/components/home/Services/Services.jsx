import React from "react";
import "./Services.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import img1 from "../../../assets/servicesImg/service_1.jpeg";
import img2 from "../../../assets/servicesImg/service_2.jpeg";
import img3 from "../../../assets/servicesImg/service_3.jpeg";
import img4 from "../../../assets/servicesImg/service_4.jpeg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-left">
        <h2>What Can We Do?</h2>
        <h3>Services we can help you with</h3>
        <h4>
          See All Services{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </h4>
      </div>
      <div className="services-right">
        <div className="service-card">
          <img src={img1} alt="Digital Marketing" />
          <h5 className="service-title">Digital Marketing</h5>
        </div>
        <div className="service-card">
          <img src={img2} alt="UI/UX Design" />
          <h5 className="service-title">UI/UX Design</h5>
        </div>
        <div className="service-card">
          <img src={img3} alt="React.js Development" />
          <h5 className="service-title">React.js Development</h5>
        </div>
        <div className="service-card">
          <img src={img4} alt="Technology" />
          <h5 className="service-title">Technology</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
