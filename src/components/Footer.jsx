import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{ backgroundImage: "url(/Images/WebBackgrounds/footerBg.jpg)" }}>
      <div className="footer-content">
        <h3>Dislyte Guide & Tips</h3>
        <div className="terms">
          <ul>
            <li className="terms_list">About</li>
            <li className="terms_list">Contact</li>
            <li className="terms_list">Privacy Policy</li>
            <li className="terms_list">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="footnote">
        © 2023 Play Dislyte. This is a fansite and is not affiliated with Lilith
        Games in any way.
      </div>
    </div>
  );
};

export default Footer;
