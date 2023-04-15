import React from "react";
import "./NavBar.css";

import { links } from "../constants/links";
import { Link } from "react-router-dom";

import useMediaQuery from "../../MediaQueryList";

const Navbar = () => {
  return (
    <div className="header-wrap">
      <section
        className="navbar container-fluid"
        style={{
          "--img": "url('/Images/WebBackgrounds/navbarBg.jpg')",
        }}>
        <div className="container d-flex flex-row">
          <div className="site-logo">
            <div title="Dislyte" className="dislyte-logo">
              Dislyte
            </div>
          </div>
          <div className="nav-content min-vh-25">
            <ul className="nav">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} className="nav-link">
                    <Link className="nav-item" to={url}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="container justify-content-center">
          <h2
            className="nav_title"
            style={{
              fontWeight: "bold",
              color: "white",
              letterSpacing: "2px",
              fontSize: "40px",
            }}>
            Dislyte Patch (3.2.2)
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
