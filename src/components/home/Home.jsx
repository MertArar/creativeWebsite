import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import ImageSlider from "./Slider/ImageSlider";
import Stats from "./Stats/Stats";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <ImageSlider />
    </div>
  );
};

export default Home;
