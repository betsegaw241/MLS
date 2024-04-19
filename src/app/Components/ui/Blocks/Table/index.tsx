import styled from "styled-components";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IColumn } from "utils/types";
import { TableHeadProp } from "./types";
import { TableHead } from "@mui/material";
import ReactSelect from "../Select/ReactSelect";
import { Flex } from "../Basics";
import Dropdown from "../Dropdown";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    fontFamily: "poppins",
    paddingBottom: "15px",
    paddingTop: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 1,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableHeader = (props: TableHeadProp) => {
  return (
    <TableHead>
      {props.columnName.map((column: IColumn) => {
        return (
          <StyledTableCell
            key={column.id}
            style={{ minWidth: column.minWidth }}
          >
            <Flex alignItems={"center"} style={{ gap: 5 }}>
              {column.options ? <Dropdown options={column.options} label={column.label} handleChange={props.handleChange}/> : column.label}
            </Flex>
          </StyledTableCell>
        );
      })}
    </TableHead>
  );
};
