import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";
import ContactBanner from "./ContactBanner/ContactBanner";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <Services />
      <Partners />
      <ContactBanner />
    </div>
  );
};

export default Home;
