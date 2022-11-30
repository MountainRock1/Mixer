import React from "react";
import TableCell from "./TableCell";
import { v4 as uuidv4 } from "uuid";

const TableRow = ({ row, rowIdx }) => {
  return (
    <tr>
      {row.map((color, colIdx) => (
        <TableCell
          key={uuidv4()}
          rowIdx={rowIdx}
          colIdx={colIdx}
          color={color}
        />
      ))}
    </tr>
  );
};

export default TableRow;
