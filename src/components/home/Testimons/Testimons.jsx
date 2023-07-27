import React from "react";
import { testimonial } from "./dummyData";
import Heading from "./Heading";
import "./Testimons.css";

const Testimons = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="testimons-container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="grid2">
            {testimonial.map((val) => (
              <div className="items shadow">
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="logo" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimons;
