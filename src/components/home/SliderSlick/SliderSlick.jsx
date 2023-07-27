import { useState } from "react";

import "./SliderSlick.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import img1 from "../../../assets/servicesImg/service_1.jpeg";
import img2 from "../../../assets/servicesImg/service_2.jpeg";
import img3 from "../../../assets/servicesImg/service_3.jpeg";
import img4 from "../../../assets/servicesImg/service_4.jpeg";

const images = [img1, img2, img3, img4];

const SliderSlick = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <BsArrowRight color="white" />,
    prevArrow: <BsArrowLeft color="white" size={155} />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-container">
      <h2 className="header">Modern React Carousel</h2>
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={index}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSlick;
