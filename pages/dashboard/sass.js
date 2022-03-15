import { Box, Grid, IconButton, Typography } from "@mui/material";
import DashboardCard from "../../Components/DashboardCard";
import DemoDotMap from "../../Components/DashboardMaps/FirstMap";
import DushboardAppBar from "../../Components/DushboardAppbar";
import { database } from "../../Data";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BarChart from "../../Components/DashboardCharts/BarChart";
import DoughnutChart from "../../Components/DashboardCharts/DoughnutChart";
import DrawerTable from "../../Components/DrawerTable";
import DashboardTable from "../../Components/DashboardTable";

export default function Saas() {
  const data = database.dashboardCard;
  return (
    <>
      <DushboardAppBar name={"Saas"} />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <DashboardCard sx={{ display: "flex" }} key={index} data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item lg={5} md={12}>
            <Box sx={{ height: "500px" }}>
              <DemoDotMap />
            </Box>
          </Grid>
          <Grid item lg={7} md={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Mobile/Desktop</Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box sx={{ width: "100%", height: "500px" }}>
              <BarChart />
            </Box>
          </Grid>
          <Grid item lg={4} md={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Total revenue</Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "300px",
                height: "300px",
                display: "flex",
                // alignItems: "center",
                justifyContent: "center",
                margin: "0px auto",
                // marginBottom: "20px",
              }}
            >
              <DoughnutChart />
            </Box>
            <DrawerTable />
          </Grid>
          <Grid item lg={8} md={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Total revenue</Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
            <DashboardTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
