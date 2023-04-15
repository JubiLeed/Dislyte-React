import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EsperDetailData } from "./EsperDetailData";
import "./EsperDetail.css";

import { FaCheck } from "react-icons/fa";

const EsperSummary = () => {
  const { esperName } = useParams();
  const [esperDetail, setEsperDetail] = useState([]);

  useEffect(() => {
    let list = EsperDetailData;

    let esperFilter = list.filter((esper) => {
      if (esper.name === esperName) {
        return esper;
      }
    });
    setEsperDetail(esperFilter[0]);
  }, []);

  return (
    <section
      className="container d-flex text-center pt-4 summary_container"
      key={esperDetail.id}>
      <div>
        <img
          className="mobileimage"
          src={esperDetail.charSprite}
          alt={esperDetail.name}
        />
      </div>
      <div className="article-esperintro container d-flex justify-content-center">
        <div>
          <img
            className="article-deskimage"
            src={esperDetail.charSprite}
            alt={esperDetail.name}
          />
        </div>
      </div>
      <article className="container p-0">
        <div className="charName mt-3">
          <div className="d-flex flex-column">
            <h3 className="mb-0">{esperDetail.name}</h3>
            <h6>({esperDetail.diety})</h6>
          </div>
          <p className="fst-italic">{esperDetail.quote}</p>
          <div className="legendSign">{esperDetail.tier}</div>
          <div className="container">
            <div className="row mt-3">
              <div className="col-4  element">
                <img src={esperDetail.typeImg} alt={esperDetail.typeName} />
              </div>
              <div className="col me-4 element">
                <img
                  style={{ height: "20px" }}
                  src={esperDetail.starsImg}
                  alt="5Stars"
                />
              </div>
              <div className="role-sign col">
                <span>{esperDetail.role}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="article-summary  mt-3">
          <div className="charDesc mt-5 row">
            <span className="infoTitle">Summary</span>
            <p className="mt-3"> {esperDetail.sumdesc}</p>

            <p className="text-start mt-3" style={{ lineHeight: "2" }}>
              {esperDetail.summain}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

function EsperDetailPage({ data }) {
  const { esperName } = useParams();
  const thisEsper = EsperDetailData.find((esper) => esper.name === esperName);

  const renderPros = thisEsper.pros.map((text, index) => {
    return (
      <ul className="text-start proscons_list" key={index}>
        <li style={{ listStyleType: "none" }} className="list_text">
          {" "}
          <span className="me-2">
            <FaCheck />
          </span>
          {text}
        </li>
      </ul>
    );
  });

  const renderCons = thisEsper.cons.map((text, index) => {
    return (
      <ul className="text-start proscons_list" key={index}>
        <li className="list_text">{text}</li>
      </ul>
    );
  });

  const renderAbilities = thisEsper.skills.map((text, index) => {
    return (
      <div className="skills-content col mt-3" key={index}>
        <article>
          <div className="d-flex container flex-column">
            <img className="m-auto skillImg" src={text.image} alt={text.name} />
            <div className="d-flex flex-column">
              <span className="fw-bold">{text.name}</span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#9932cc",
                }}>
                {text.active}
              </span>
            </div>
            <div className="text-start mt-2 mb-3">
              <p style={{ lineHeight: "2" }}>{text.desc}</p>

              <p style={{ lineHeight: "2", color: "darkcyan" }}>
                {" "}
                {text?.passive}
              </p>
              <p style={{ lineHeight: "2", color: "orangered" }}>
                {" "}
                {text?.ascend}
              </p>
              <p className="fw-bold">{text.cooldown}</p>
            </div>
          </div>
        </article>
      </div>
    );
  });

  const renderResonance = thisEsper.gate.map((item, index) => {
    return (
      <div className="resonanceContainer container p-0" key={index}>
        <div className="row">
          <div className="resonanceItem fs-6 col-2">
            <div className="mt-3">
              <img
                className="resonance_image"
                src={item.image}
                alt={item.number}
              />
              <p>{item.number}</p>
            </div>
          </div>

          <div className="resonanceItem col-3">{item.gatename}</div>
          <div className="resonanceItem col">{item.gatedesc}</div>
        </div>
      </div>
    );
  });

  const renderRelicsets = thisEsper.sets.map((item, index) => {
    return (
      <div
        className="container m-2"
        style={{ border: "1px solid black", maxWidth: "280px" }}
        key={index}>
        <div className="row relicsContent">
          <p
            style={{
              backgroundColor: "gray",
              padding: "5px",
            }}>
            {item.setname}
          </p>
          <div className="relicImg">
            <div className="container">
              <span className="d-flex justify-content-center">
                <img src={item.relicx4img} alt={item.relicx4} />
                <span className="mx-3">{item.relicx4}</span>
              </span>
              <p style={{ fontSize: "12px" }}>{item.relicx4desc}</p>
            </div>
          </div>

          <div className="relicImg">
            <div className="container">
              <span className="d-flex justify-content-center">
                <img src={item.relicx2img} alt={item.relicx2} />
                <span className="mx-3">{item.relicx2}</span>
              </span>
              <p style={{ fontSize: "12px" }}>{item.relicx2desc}</p>
            </div>
          </div>

          <div className="container">
            <div className="d-flex justify-content-around">
              <div className="text-center">
                <p className="m-0">Ring</p>
                <p style={{ fontSize: "12px" }}>{item.Ring}</p>
              </div>
              <div>
                <p className="m-0">Headphones</p>
                <p style={{ fontSize: "12px" }}>{item.Headphone}</p>
              </div>
              <div>
                <p className="m-0">Boots</p>
                <p style={{ fontSize: "12px" }}>{item.Boots}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="site-wrap mt-5 m-auto text-center">
      <article className="mt-4 site-content container">
        <EsperSummary />

        <section className="container-lg prosCons-container">
          <div className="row mt-3">
            <span className="infoTitle">Pros & Cons</span>
          </div>
          <div className="container mt-3 m-auto">
            <div className="proCons-content row mt-3 m-auto container">
              <div className="col">{renderPros}</div>
              <div className="col">{renderCons}</div>
            </div>
          </div>
        </section>

        <section className="container skillsContainer">
          <div className="skillSet row mt-5">
            <span className="infoTitle">Abilities</span>
          </div>
          <div className="row ability_container">{renderAbilities}</div>
        </section>

        <section className="skillsInfo container">
          <div className="row">
            <span className="infoTitle">Captain Ability</span>
          </div>
          <div className="mt-3">
            <div className="me-3">
              <img
                className="captainImg"
                src={thisEsper.captainsability.image}
                alt={thisEsper.esperName}
              />
            </div>
            <p>{thisEsper.captainsability.desc}</p>
          </div>
        </section>

        <section className="container mt-3">
          <div className="row">
            <span className="infoTitle mb-3">Resonance</span>
            <div className="resonance-content">{renderResonance}</div>
          </div>
        </section>

        <section className="container relicsContainer mt-3">
          <div className="row">
            <span className="infoTitle">Recommended Sets</span>
          </div>
          <div className="row justify-content-center mt-3">
            {renderRelicsets}
          </div>
        </section>
      </article>
    </div>
  );
}

export default EsperDetailPage;
