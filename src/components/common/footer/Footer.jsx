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
      <div className="container-footer">
        <div className="content-footer">
          <div className="profile">
            <div className="logo-area">
              <img src={logo} alt="" />
            </div>
            <div className="desc-area">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium totam fuga non neque reprehenderit.
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
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">UI / UX Design</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">React.js Development</a>
              </li>
            </ul>
            <ul className="service-header">
              <li className="service-name">Industry</li>
              <li>
                <a href="#">Başlık 5</a>
              </li>
              <li>
                <a href="#">Başlık 6</a>
              </li>
              <li>
                <a href="#">Başlık 7</a>
              </li>
              <li>
                <a href="#">Başlık 8</a>
              </li>
            </ul>
            <ul className="service-header">
              <li className="service-name">Compnany</li>
              <li>
                <a href="#">Hakkında</a>
              </li>
              <li>
                <a href="#">Dijital Çözümler</a>
              </li>
              <li>
                <a href="#">Süreçler</a>
              </li>
              <li>
                <a href="#">Takım</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="copy-right">
            <span>Copyright</span>
            <AiOutlineCopyrightCircle />
            <span>2023 Arino</span>
          </div>
          <div className="tou">
            <a href="#">Term of Use</a>
            <a href="#">Privacy & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
