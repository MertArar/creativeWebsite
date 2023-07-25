import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillHome,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content-footer">
          <div className="profile">
            <div className="logo-area">
              <img src={logo} alt="" />
            </div>
            <div className="desc-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cumque fugit dolorum.
              </p>
            </div>
            <div className="social-media">
              <a href="#">
                <AiFillHome />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
          <div className="service-area">
            <ul className="service-header">
              <li className="service-name">Services</li>
              <li>
                <a href="#">IT Consulting</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Cloud</a>
              </li>
              <li>
                <a href="#">Devops & Support</a>
              </li>
            </ul>
            <ul className="service-header">
              <li className="service-name">Industry</li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Public Sector</a>
              </li>
              <li>
                <a href="#">Smart Office</a>
              </li>
              <li>
                <a href="#">Retail</a>
              </li>
            </ul>
            <ul className="service-header">
              <li className="service-name">Compnany</li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Join us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="copy-right">
            <a href=""></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
