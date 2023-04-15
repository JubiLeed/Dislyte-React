import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import detail from "./EventDetails";

const NewsDetails = () => {
  const { url } = useParams();
  return (
    <div className="news-wrap">
      <div className="news-container container">
        <div style={{ marginTop: "30px", fontSize: "30px" }}>
          <p>Latest News</p>
        </div>
        {detail.map((items, index) => {
          const { title, image, date, url, desc } = items;
          return (
            <div className="news-content" key={index}>
              <div className="news-detail">
                <Link to={`${url}`}>
                  <img className="newsImage" src={image} alt="" />
                </Link>
              </div>
              <div className="ms-4">
                <span style={{ fontSize: "12px" }}>{date}</span>
                <p> ▌ {title}</p>
                <p style={{ color: "gray" }}>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsDetails;
