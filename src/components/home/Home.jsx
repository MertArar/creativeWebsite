import React from "react";
import HeroVideo from "./heroVideo/heroVideo";
import Statistic from "./Statistic/Statistic";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";
import ContactBanner from "./ContactBanner/ContactBanner";
import SliderSlick from "./SliderSlick/SliderSlick";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Statistic />
      <Services />
      <SliderSlick />
      <Testimonials />
      <Partners />
      <ContactBanner />
    </div>
  );
};

export default Home;
