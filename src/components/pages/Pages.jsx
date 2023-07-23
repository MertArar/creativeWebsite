import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import About from "../about/About";
import Footer from "../common/footer/Footer";
import Navbar from "../navbar/Navbar";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
