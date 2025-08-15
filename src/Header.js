import "./Header.css";
import React, { useState, useRef } from "react";
import {} from "react-icons";

const Header = ({ scrollToSection }) => {
  // State to handle the small menu visibility
  const [isSmallMenuActive, setIsSmallMenuActive] = useState(false);

  // Refs to handle the hamburger menu button and its close button
  const hamMenuBtnRef = useRef(null);
  const hamMenuCloseBtnRef = useRef(null);

  // Toggle the small menu and handle the hamburger/close button visibility
  const toggleMenu = () => {
    setIsSmallMenuActive(!isSmallMenuActive);
  };

  // Close the small menu when a link is clicked
  const handleLinkClick = (e, section) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setIsSmallMenuActive(false);
    scrollToSection(section); // Scroll to the specific section

    // Update the browser URL with the section hash
    window.history.pushState(null, null, `#${section}`);
  };

  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="./stellabros.png"
              alt="Stellabros Logo Image"
              className="header__logo-img"
              loading="lazy"
            />
          </div>
          <div className="header__profile">
            <span className="header__logo-sub">Stellabros Consulting</span>
            <span className="header__logo-text">
              ...Your guide to greatness
            </span>
          </div>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a
                href="#home"
                className={`header__link ${
                  activeLink === "home" &&
                  hoveredLink !== "about" &&
                  hoveredLink !== "contact"
                    ? "active"
                    : ""
                }`}
                onClick={(e) => handleLinkClick(e, "home")}
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="#about"
                className={`header__link ${
                  hoveredLink === "about" ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, "about")}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                About
              </a>
            </li>
            <li className="header__link-wrapper">
              <a
                href="#contact"
                className={`header__link ${
                  hoveredLink === "contact" ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, "contact")}
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              ref={hamMenuBtnRef}
              src="https://www.rammaheshwari.com/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${
                isSmallMenuActive ? "d-none" : ""
              }`}
            />
            <img
              ref={hamMenuCloseBtnRef}
              src="https://www.rammaheshwari.com/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${
                !isSmallMenuActive ? "d-none" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`header__sm-menu ${
          isSmallMenuActive ? "header__sm-menu--active" : ""
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={handleLinkClick}>
              <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
                Home
              </a>
            </li>
            <li className="header__sm-menu-link" onClick={handleLinkClick}>
              <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                About
              </a>
            </li>
            <li className="header__sm-menu-link" onClick={handleLinkClick}>
              <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
