import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <Services />
    </div>
  );
};

export default Home;
