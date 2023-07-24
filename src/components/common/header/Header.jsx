import React, { useState } from "react";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../../assets/logo.svg";

import "./header.css";

const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
