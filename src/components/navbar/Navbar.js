import React from "react";
import "./Navbar.css";
import * as Icons from "react-icons/fa";
import { Link, animateScroll } from "react-scroll";

import { navigationData } from "../../data";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <span
          className="home-title-logo"
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          PORTFOLIO <Icons.FaLaptopCode />
        </span>
        <ul className="nav-items">
          {navigationData.map((navItem) => {
            return (
              <li className="nav-item" key={navItem.id}>
                <Link
                  to={navItem.path}
                  smooth={true}
                  duration={1000}
                  offset={navItem.offSet}
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
