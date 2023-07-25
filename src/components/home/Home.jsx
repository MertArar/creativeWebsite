import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <About />
    </div>
  );
};

export default Home;
