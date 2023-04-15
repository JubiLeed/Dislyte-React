import React from "react";
import { FaSearch } from "react-icons/fa";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          border: "none",
          outline: "none",
          width: "200px",
        }}
        placeholder="Search..."
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button
        style={{
          border: "none",
          height: "31px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}>
        <FaSearch />
      </button>
    </span>
  );
};
