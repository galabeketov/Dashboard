import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { database } from "../../Data";
import { Fab, Typography } from "@mui/material";

function createData(sourse, revenue, value) {
  return { sourse, revenue, value };
}

const data = database.tableData;

const rows = data;

export default function DashboardTable() {
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
            <TableCell>Name</TableCell>
            <TableCell align="right"> Start Date</TableCell>
            <TableCell align="right"> End Date</TableCell>
            <TableCell align="right"> Date</TableCell>
            <TableCell align="right"> Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">
                <Fab
                  variant="extended"
                  size="small"
                  //   color="success"
                  color={
                    row.state === "Done"
                      ? "success"
                      : row.state === "Canceled"
                      ? "error"
                      : "warning"
                  }
                  aria-label="add"
                  sx={{ boxShadow: "none" }}
                >
                  {row.state}
                </Fab>
              </TableCell>
              <TableCell align="right">{row.assigne}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
