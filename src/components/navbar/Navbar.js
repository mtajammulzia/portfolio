import React, { useState, useEffect } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link, animateScroll } from "react-scroll";

import { navigationData } from "../../data";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        !mobile && setMobile(true);
      } else if (mobile) {
        setMobile(false);
        setSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <nav className="navbar">
        <span
          className="home-title-logo"
          onClick={() => {
            animateScroll.scrollToTop();
            setSidebar(false);
          }}
        >
          PORTFOLIO <FaIcons.FaLaptopCode />
        </span>
        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <FaIcons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <FaIcons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
        {!mobile && (
          <ul className={mobile ? "nav-items mobile-nav" : "nav-items"}>
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
        )}
      </nav>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navigationData.map((navItem) => {
            return (
              <li className="sidebar-item" key={navItem.id}>
                <Link
                  to={navItem.path}
                  smooth={true}
                  duration={1000}
                  offset={navItem.offSet}
                  onClick={() => setSidebar(false)}
                >
                  {navItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
