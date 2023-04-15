import { React, useState, useEffect } from "react";
import { EsperTierData } from "../TierListPage/tierlistdata";
import { Link } from "react-router-dom";

export const HomeLatestEspers = () => {
  const [esper, setEsper] = useState(EsperTierData);

  const latest = [{ Name: "Leora" }, { Name: "Elaine" }, { Name: "Camille" }];

  useEffect(() => {
    function latestEspers() {
      return esper.filter((esperone) => {
        let flag = false;
        latest.forEach((espertwo) => {
          if (esperone.esperName.includes(espertwo.Name)) {
            flag = true;
          }
        });
        return flag;
      });
    }
    setEsper(latestEspers);
  }, []);

  return (
    <article className="container-fluid latestchar-container">
      <div className="row homeTitle mt-3">
        <h4>Latest Characters</h4>
      </div>
      <div className="row mt-2 p-3">
        {esper.map((esper, index) => {
          return (
            <div className="col lastestChar p-2" key={index}>
              <div className="container d-flex">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Link to={`/Espers/${esper.esperName.replace(/ /g, "-")}`}>
                    <img
                      className="lastestChar-img"
                      src={esper.charImg}
                      alt={esper.esperName}
                    />
                  </Link>
                  <img
                    style={{ height: "10px", width: "50px" }}
                    src="Images/Misc/Stars_TypeIcons/5star.webp"
                    alt={`${esper.stars}stars`}
                  />
                </div>
                <div className="container">
                  <div>
                    <p className="m-0">{esper.esperName}</p>
                    <p className="m-0" style={{ fontSize: "13px" }}>
                      {`(${esper.deity})`}
                    </p>
                  </div>
                  <div id="latestCharType">
                    <span
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                      }}>
                      {esper.role}
                    </span>
                  </div>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src={esper.typeImg}
                    alt={esper.type}
                  />
                  <span
                    className="ms-1"
                    style={{ fontSize: "13px", letterSpacing: "1px" }}>
                    {esper.type}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/Espers`} style={{ textDecoration: "none", color: "black" }}>
        <div className="row justify-content-center mt-3" id="seeAll">
          <p className="text-center moreBtn">All Characters</p>
        </div>
      </Link>
    </article>
  );
};
