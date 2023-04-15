import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../HomePage.css";
import ImageComponent from "../../constants/OverlayImage";

const CurrentCharEvent = () => {
  return (
    <article className="container events-container">
      <div className="row homeTitle">
        <div className="col">
          <h4>Current Character Event</h4>
        </div>
      </div>

      <div className="events-content container m-auto d-flex flex-wrap">
        <div className="container m-auto d-flex flex-wrap justify-content-center gap-5 mt-3">
          <ImageComponent
            src={"Images/Character/Leora_Athena/Leora_eventbanner.jpeg"}
          />
          <ImageComponent
            src={"Images/Character/Elaine_Nyx/Elaine_eventbanner.jpeg"}
          />
        </div>

        <div className="mt-3">
          <h5>Event Details:</h5>
          <p>
            ◇ Tabaton is a suspicious place. Can Leora solve the mysteries and
            uncover the hidden truth?
          </p>
          <p>
            Event Time: 2023-04-11 (post-update) - 2023-04-28 00:00:00 (UTC+0)
          </p>
        </div>
      </div>
      <Link
        to={`/NewsDetails`}
        style={{ textDecoration: "none", color: "black" }}>
        <div className="row justify-content-center mt-3" id="seeAll">
          <p className="text-center moreBtn">All Character Events</p>
        </div>
      </Link>
    </article>
  );
};

export default CurrentCharEvent;
