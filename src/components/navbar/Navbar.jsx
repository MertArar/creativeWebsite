import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinksdata } from "../data/Data";

import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="nav-item" key={_id}>
              <Link activeClass="active" to={link} onClick={closeMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
