import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";
import Testimonials from "./Testimonials/Testimonials";
import ContactBanner from "./ContactBanner/ContactBanner";
import SliderSlick from "./SliderSlick/SliderSlick";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <Services />
      <SliderSlick />
      <Partners />
      <Testimonials />
      <ContactBanner />
    </div>
  );
};

export default Home;
