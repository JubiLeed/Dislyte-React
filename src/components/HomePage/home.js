import React from "react";
import "./HomePage.css";
import { HomeLatestEspers } from "./HomeLatestEspers";
import { Link } from "react-router-dom";
import { Twitter } from "./Twitter";
import patchnote320 from "./Events/PatchNotes/Patch320";
import YouTubeEmbed from "./Youtube";

import SocialMedia from "./SocialMedia";

import EventsCarousel, { CarouselItem } from "./Events/EventsCarousel";
import CurrentCharEvent from "./Events/CurrentCharEvent";

const Home = () => {
  return (
    <section
      className="bg-image pt-5 pb-4"
      style={{
        backgroundImage: "url(Images/WebBackgrounds/homePageBg.jpg)",
        backgroundSize: "cover",
      }}>
      <div className="container pb-2 gap-2">
        <div className="row">
          <div className="home_left_container col-lg-9">
            <main
              className="container bg-light"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}>
              <article className="patchNotes-container">
                <div className="row justify-content-center align-items-center patchNotes-content">
                  <div className="col-3 d-flex justify-content-center patchNotes-image">
                    <img
                      src="Images/WebBackgrounds/PatchNote2.png"
                      alt="patchnotes"
                    />
                  </div>
                  <div className="col-md-4">
                    <h5 className="mt-3 text-center">Latest Patch Notes</h5>
                    <div className="row mt-5" style={{ fontSize: "14px" }}>
                      <div className="col">
                        <a
                          href="/patchnote320"
                          style={{ textDecoration: "none" }}>
                          <p className="text-center ">
                            Dislyte Update v3.2.2 Patch Notes
                          </p>
                        </a>
                      </div>
                      <div className="col">
                        <a href="#">
                          <p className="text-center">
                            Dislyte Update v3.2.1 Patch Notes
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-md d-flex justify-content-center mt-5">
                  <YouTubeEmbed
                    videoId="y-dyqvQ_Bss"
                    iframeClassName="youtube"
                  />
                </div>
              </article>
              <CurrentCharEvent />

              <HomeLatestEspers />

              <EventsCarousel />

              <Twitter />
            </main>
          </div>
          <div
            className="bg-light p-2 home_right_container col-2"
            style={{
              height: "140vh",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
