import React from "react";

import "./Partner.css";

import img1 from "../../../assets/partners/partner_1.svg";
import img2 from "../../../assets/partners/partner_2.svg";
import img3 from "../../../assets/partners/partner_3.svg";
import img4 from "../../../assets/partners/partner_4.svg";
import img5 from "../../../assets/partners/partner_5.svg";

const Partners = () => {
  return (
    <div className="partners">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
    </div>
  );
};

export default Partners;
