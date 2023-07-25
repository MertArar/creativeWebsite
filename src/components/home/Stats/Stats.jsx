import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "./Stats.css";

import stats from "../../../assets/stats.jpeg";

const Stats = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="content-text">
          <h1>Our Fun Fact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsum
            voluptatum nemo eius alias facilis vero vitae sint, labore natus.
            Libero, exercitationem!
          </p>
        </div>
        <div className="content-stats">
          <span>
            40K + <p>Happ Customer</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
