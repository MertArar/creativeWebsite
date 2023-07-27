import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

import img1 from "../../../assets/sliderImage/img_1.jpg";
import img2 from "../../../assets/sliderImage/img_2.jpg";
import img3 from "../../../assets/sliderImage/img_3.jpg";
import img4 from "../../../assets/sliderImage/img_4.jpg";

function Team() {
  let settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="scroll">
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img1} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img2} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img3} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={img4} />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Team;
