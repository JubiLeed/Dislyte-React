import React from "react";
import {
  socialmedia,
  musiclinks,
  officialpages,
  devpages,
} from "../constants/links";
import { Link } from "react-router-dom";
import "./HomePage.css";

const SocialMedia = () => {
  return (
    <article style={{ padding: "20px" }}>
      <section className="mt-3 mb-3">
        <p className="fw-bold fs-5 ">Dislyte Pages:</p>
        <div>
          {officialpages.map((link) => {
            const { id, url, text, img } = link;
            return (
              <div key={id} className="container lh-2">
                <Link
                  className="ms-3"
                  style={{ textDecoration: "none" }}
                  to={url}>
                  <span className="sidebarLink">{text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-5 mb-3">
        <p className="fw-bold fs-5 ">Social Media:</p>
        <div>
          {socialmedia.map((link) => {
            const { id, url, text, img } = link;
            return (
              <div key={id} className="container lh-2">
                <img src={img} alt={text} style={{ width: "25px" }} />

                <Link
                  className="ms-3"
                  style={{ textDecoration: "none" }}
                  to={url}>
                  <span className="sidebarLink">{text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-5 mb-3">
        <p className="fw-bold fs-5 ">Music:</p>
        <div>
          {musiclinks.map((link) => {
            const { id, url, text, img } = link;
            return (
              <div key={id} className="container">
                <img src={img} alt={text} style={{ width: "25px" }} />

                <Link
                  className="ms-3"
                  style={{ textDecoration: "none" }}
                  to={url}>
                  <span className="sidebarLink">{text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-5 mb-3">
        <p className="fw-bold fs-5">Official Pages:</p>
        <div>
          {devpages.map((link) => {
            const { id, url, text, img } = link;
            return (
              <div key={id} className="container">
                <img src={img} alt={text} style={{ width: "40px" }} />

                <Link
                  className="ms-3"
                  style={{ textDecoration: "none" }}
                  to={url}>
                  <span className="sidebarLink">{text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default SocialMedia;
