import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../common/header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
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
