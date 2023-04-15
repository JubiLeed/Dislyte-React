import React from "react";
import { Link } from "react-router-dom";

export const EsperCard = ({
  esperName,
  charImg,
  mythImg,
  mythName,
  affilImg,
  affilName,
  stars,
  typeImg,
  type,
  role,
}) => {
  return (
    <section className="container p-2 card-container">
      <article className="card">
        <div className="card-contents">
          <div className="text-center ms-1">
            <img src={charImg} style={{ width: "75px" }} alt={esperName} />
            <br />
            <div className="card_name">
              <span>{esperName}</span>
            </div>
          </div>
          <div className="ms-2 mt-3">
            <div>
              <img src={mythImg} alt={mythName} id="esperMythos" />
              <span style={{ marginLeft: "10px" }}>{mythName}</span>
            </div>
            <div className="mt-2 d-flex">
              <img src={affilImg} id="esperAffiliation" alt={affilName} />
              <div>
                <span style={{ marginLeft: "10px" }}>{affilName}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <span>
            {stars}
            <img src="Images/Misc/Stars_TypeIcons/rarity.png" alt="stars" />
          </span>
          <img
            src={typeImg}
            alt={type}
            id="esperType"
            style={{ width: "25px" }}
          />
          <span>{role}</span>
        </div>
      </article>
    </section>
  );
};
