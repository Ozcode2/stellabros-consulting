import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Email */}
        <div className="footer-item">
          <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
          <a href="mailto:Stellabrothers8@gmail.com">
            Stellabrothers8@gmail.com
          </a>
        </div>

        {/* Phone Numbers */}
        <div className="footer-item">
          <div className="footer-phones">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />{" "}
            <a href="tel:08130021360">+2348130021360</a>,{" "}
            <a href="tel:08103023669">+2348103023669</a>,{" "}
            <a href="tel:09036471621">+2349036471621</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="rights">
          <p className="copyright">Stellabros Consulting &copy; 2025</p>
        </div>
        <p className="developer">Developed by OzcoTech Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
