import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, Fab } from "@mui/material";

function createData(name, teach, license, sales) {
  return { name, teach, license, sales };
}

const rows = [
  createData("AppStack", "HTML", "Single License", 24),
  createData("Material App", "React", "Single License", 37),
  createData("Milo", "HTML", "Single License", 24),
  createData("Robust UI Kit", "Angular", "Single License", 67),
  createData("Spark", "React", "Single License", 49),
];
console.log(rows);

export default function SimpleTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Teach</TableCell>
            <TableCell align="right">License</TableCell>
            <TableCell align="right">Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{row.name}</TableCell>
              <TableCell align="right">
                <Chip
                  size="small"
                  sx={{
                    boxShadow: "none !important",
                    borderRadius: 2,
                    fontSize: "12px",
                    color: "white",
                  }}
                  label={row.teach}
                  color={
                    row.teach === "HTML"
                      ? "primary"
                      : row.teach === "React"
                      ? "success"
                      : "error"
                  }
                />
              </TableCell>
              <TableCell align="right">{row.license}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
