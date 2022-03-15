import { Box, Grid, IconButton, Typography } from "@mui/material";
import DashboardCard from "../../Components/DashboardCard";
import BarChart from "../../Components/DashboardCharts/BarChart";
import DushboardAppBar from "../../Components/DushboardAppbar";
import { database } from "../../Data";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DemoDotMap from "../../Components/DashboardMaps/FirstMap";
import DoughnutChart from "../../Components/DashboardCharts/DoughnutChart";
import DrawerTable from "../../Components/DrawerTable";
import WorldMap from "../../Components/DashboardMaps/WorldMap";

export default function Analytics() {
  const data = database.dashboardCard;
  return (
    <>
      <DushboardAppBar name={"Analytics"} />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item lg={5} md={12}>
            <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item sx={{ display: "flex" }} lg={6} sm={12} xs={12}>
                  <DashboardCard key={index} data={item} />
                </Grid>
              ))}
            </Grid>
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
            <Box sx={{ width: "100%", height: "100%" }}>
              <BarChart />
            </Box>
          </Grid>
          <Grid item lg={7} md={12}>
            <Box sx={{ height: "100%" }}>
              <WorldMap />
            </Box>
          </Grid>
          <Grid item lg={5} md={12}>
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
        </Grid>
      </Box>
    </>
  );
}
