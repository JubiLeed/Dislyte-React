import { Link } from "react-router-dom";

export const Columns = [
  {
    Header: "Rarity",
    accessor: "stars",
    Cell: (cellProps) => (
      <div className="hero_column_0 hero_clmn_rarity ">
        <span className="fw-bold">{cellProps.row.original.stars}</span>
        <img src="../Images/Misc/Stars_TypeIcons/rarity.png" alt="Rarity" />
        <img
          src={cellProps.row.original.typeImg}
          width="30"
          alt={cellProps.row.original.type}
        />
      </div>
    ),
  },

  {
    Header: "Esper",
    accessor: "esperName",
    Cell: (tableProps) => (
      <Link
        to={tableProps.row.original.esperName}
        style={{ textDecoration: "none", color: "black" }}>
        <div
          className="charimage"
          style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{ margin: "auto" }}
            src={tableProps.row.original.charImg}
            width={65}
            alt="Esper"
          />
          <span style={{ fontWeight: "bold" }}>
            {tableProps.row.original.esperName}
          </span>
          {tableProps.row.original.deity}
        </div>
      </Link>
    ),
  },

  {
    Header: "Overall",
    accessor: "hero_column_overall",
  },

  {
    Header: "Story",
    accessor: "hero_column_story",
  },

  {
    Header: "Kronos",
    accessor: "hero_column_kronos",
  },

  {
    Header: "Apep",
    accessor: "hero_column_apep",
  },

  {
    Header: "Fafnir",
    accessor: "hero_column_fafnir",
  },

  {
    Header: "Shadowfire",
    accessor: "hero_column_shdwfire",
  },

  {
    Header: "Shadowgale",
    accessor: "hero_column_shdwgale",
  },
  {
    Header: "Shadowstream",
    accessor: "hero_column_shdwstream",
  },

  {
    Header: "Sonic Miracle",
    accessor: "hero_column_sonicmir",
  },

  {
    Header: "Temporal Tower",
    accessor: "hero_column_tt",
  },

  {
    Header: "Point War",
    accessor: "hero_column_pw",
  },
];
