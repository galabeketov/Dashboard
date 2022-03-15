import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { database } from "../../Data";
import { Typography } from "@mui/material";

function createData(sourse, revenue, value) {
  return { sourse, revenue, value };
}

const data = database.weeklySales;
console.log("my data", data[0].sourse);

const rows = [data[0], data[1], data[2], data[3]];

export default function DrawerTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              fontSize: "0.8125rem",
              fontWeight: "100",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            <TableCell>Source</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sourse}
              </TableCell>
              <TableCell align="right">{row.revenue}</TableCell>
              <TableCell align="right">
                <Typography
                  sx={{
                    color:
                      row.value > 0 ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)",
                    background:
                      row.value > 0
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                    display: "inline-block",
                  }}
                >
                  {row.red ? " " : "+"}
                  {row.value}%
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
