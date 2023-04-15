import "./EspersPage.css";
import { React, useState, useEffect } from "react";
import { EsperCard } from "./EsperCard";
import { EsperTierData } from "../TierListPage/tierlistdata";
import { RoleFilter, TypeFilter, StarFilter } from "../constants/FilterBtns";
import { Link } from "react-router-dom";
const allRoles = ["all", ...new Set(EsperTierData.map((esper) => esper.role))];
const allTypes = [...new Set(EsperTierData.map((esper) => esper.typeImg))];
const allStars = ["all", ...new Set(EsperTierData.map((esper) => esper.stars))];

const Espers = () => {
  const [Filter, setFilter] = useState(EsperTierData);
  const [roles, setRoles] = useState(allRoles);
  const [types, setTypes] = useState(allTypes);
  const [stars, setStars] = useState(allStars);

  const filterRoles = (role) => {
    if (role === "all") {
      setFilter(EsperTierData);
      return;
    }
    const newRoles = EsperTierData.filter((esper) => esper.role === role);
    setFilter(newRoles);
  };

  const filterTypes = (type) => {
    const newTypes = EsperTierData.filter((esper) => esper.typeImg === type);
    setFilter(newTypes);
  };

  const filterStars = (star) => {
    if (star === "all") {
      setFilter(EsperTierData);
      return;
    }
    const newStars = EsperTierData.filter((esper) => esper.stars === star);
    setFilter(newStars);
  };

  return (
    <div
      className="esper-wrap"
      style={{ backgroundImage: "url(/Images/WebBackgrounds/dislyteBG.jpg)" }}>
      <div className="container mt-4">
        <h3>Espers</h3>
        <section>
          <p>
            Espers are people who got divine power after the Miracle appeared
            upon the world. In the Dislyte universe there are two groups, called
            the Esper Union and Shadow Decree, who are trying to find the
            mystery behind Miracle; they have differing views of this
            phenomenon.
          </p>
          <p>
            Some individuals are Wanderers, who don't belong to any of these
            groups; they move with their own morality.
          </p>
        </section>
        <section className="filterbtn-container">
          <div>
            <RoleFilter roles={roles} filterRoles={filterRoles} />
          </div>
          <div className="mt-3">
            <TypeFilter types={types} filterTypes={filterTypes} />
          </div>
          <div className="mt-3">
            <StarFilter stars={stars} filterStars={filterStars} />
          </div>
        </section>

        <section className="container mt-4 d-flex flex-wrap">
          {Filter.map((esper, index) => {
            return (
              <Link
                to={`/Espers/${esper.esperName.replace(/ /g, "-")}`}
                style={{ textDecoration: "none" }}>
                <EsperCard {...esper} key={index} />
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Espers;
