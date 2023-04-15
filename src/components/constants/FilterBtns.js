import React from "react";
import { EsperTierData, TypeButtons } from "../TierListPage/tierlistdata";

export const RoleFilter = ({ roles, filterRoles }) => {
  return (
    <div>
      {roles.map((role, index) => {
        return (
          <button
            type="button"
            className="roleSearch"
            key={index}
            onClick={() => filterRoles(role)}>
            {role}
          </button>
        );
      })}
    </div>
  );
};

export const TypeFilter = ({ types, filterTypes }) => {
  return (
    <div>
      {types.map((type, index) => {
        return (
          <button
            type="button"
            className="search searchType"
            key={index}
            onClick={() => filterTypes(type)}>
            <img src={type} alt={type} />
          </button>
        );
      })}
    </div>
  );
};

export const StarFilter = ({ stars, filterStars }) => {
  return (
    <div>
      {stars.map((star, index) => {
        return (
          <button
            type="button"
            className="search"
            key={index}
            onClick={() => filterStars(star)}>
            {star}
            <img src="../Images/Misc/Stars_TypeIcons/rarity.png" alt="Rarity" />
          </button>
        );
      })}
    </div>
  );
};

export const SearchInputFilter = ({ input, filterInput }) => {
  return (
    <div>
      <input
        type="search"
        value={input}
        onChange={filterInput}
        placeholder="Search..."
        style={{ outline: "none", width: "250px" }}
      />
    </div>
  );
};
