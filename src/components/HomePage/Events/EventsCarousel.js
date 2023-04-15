import React, { useState } from "react";
import "./EventsPage.css";
import { Link } from "react-router-dom";
import detail from "./EventDetails";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const EventsCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [list, setList] = useState(detail);

  const updateIndex = (newIndex) => {
    const li = list.length;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= li) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <article className="container-fluid">
      <div className="row homeTitle mt-3">
        <div className="col">
          <h4>Events</h4>
        </div>
      </div>
      <section className="latestnews-container">
        <div className="arrows arrowleft">
          <AiOutlineLeft
            size={50}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
        </div>
        <div className="carousel">
          <div
            className="inner-carousel"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {detail.map((items, index) => {
              const { title, image, date, url } = items;
              return (
                <div className="news-items" key={index}>
                  <Link to={`${url}`} style={{ textDecoration: "none" }}>
                    <img
                      className="news-image"
                      src={image}
                      alt=""
                      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    />
                    <p>{title}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrows arrowright">
          <AiOutlineRight
            size={50}
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        </div>
      </section>
      <Link
        to={"/NewsDetails"}
        style={{ textDecoration: "none", color: "black" }}>
        <div className="row justify-content-center" id="seeAll">
          <p className="text-center moreBtn" style={{ width: "200px" }}>
            See Latest News & Events
          </p>
        </div>
      </Link>
    </article>
  );
};

export default EventsCarousel;
