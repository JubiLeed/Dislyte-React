import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";
import { EsperTierData } from "./tierlistdata";
import { Columns } from "./Columns";
import { GlobalFilter } from "./GlobalFilter";

const TierListTable = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => EsperTierData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <div className="mt-4 table-responsive">
      <div className="mb-3 text-start">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table
        className="text-center container table table-border-subtle table-striped table-fixed"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps(
                    column.getSortByToggleProps()
                  );
                  return (
                    <th key={key} {...restColumn}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody className="align-middle" {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();

            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td key={key} {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TierListTable;
