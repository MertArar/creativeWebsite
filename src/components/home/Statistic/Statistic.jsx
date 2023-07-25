import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import stats from "../../../assets/stats.jpeg";

import "./Statistic.css";

const Statistic = () => {
  return (
    <div class="container">
      <div class="cs-funfact_wrap cs-type1">
        <div class="cs-funfact_shape" data-src={stats}></div>
        <div class="cs-funfact_left">
          <div class="cs-funfact_heading">
            <h2>Our fun fact</h2>
            <p>
              {" "}
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.{" "}
            </p>
          </div>
        </div>
        <div className="cs-funfact_right">
          <div className="cs-funfacts">
            <div className="cs-funfact cs-style1">
              <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <CountUp start={0} end={40} duration={2.5} separator="," />K
              </div>
              <div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>Global Happy Clients</p>
              </div>
            </div>
            <div className="cs-funfact cs-style1">
              <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <CountUp start={0} end={50} duration={2.5} separator="," />K
              </div>
              <div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>Project Completed</p>
              </div>
            </div>
            <div className="cs-funfact cs-style1">
              <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <CountUp start={0} end={245} duration={2.5} separator="," />
              </div>
              <div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>Team Members</p>
              </div>
            </div>
            <div className="cs-funfact cs-style1">
              <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <CountUp start={0} end={550} duration={2.5} separator="," />
              </div>
              <div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>Digital products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
