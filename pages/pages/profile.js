import React from "react";
import MainCard from "../../Components/Cards/MainCard";
import AvatarImg from "../../Components/AvatarImg";
import CustomButton from "../../Components/CustomButton";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Drawer,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import {
  AccountBalanceOutlined,
  AttachMoney,
  FacebookOutlined,
  Home,
  HomeMaxOutlined,
  HomeOutlined,
  Instagram,
  IosShareOutlined,
  LocalMall,
  LocalPostOfficeOutlined,
  LocationCityOutlined,
  LocationOnOutlined,
  SchoolOutlined,
  Twitter,
} from "@mui/icons-material";
import Title from "../../Components/Title";
import MyLink from "../../Components/Link";
import VerticalBarChart from "../../Components/Charts/VerticalBarChart";
import SimpleTable from "../../Components/Tables/SimpleTable";
import StaticsCard from "../../Components/Cards/StaticsCard";
import BarChart from "../../Components/DashboardCharts/BarChart";
const skills = [
  "HTML",
  "JavaScript",
  "Sass",
  "React",
  "Redux",
  "NextJS",
  "Material UI",
  "UI",
  "UX",
];

const datasetsItem = {
  label: "Revenue",
  data: [30, 40, 45, 18, 55, 75, 55, 60, 38, 20, 20, 10],
  borderColor: ["rgb(55, 111, 208)"],
  backgroundColor: ["#EEEEEE"],
  barPercentage: [".3"],
  borderRadius: ["10"],
};

const Profile = () => {
  return (
    <Container>
      <Title />
      <Grid container spacing={3} mt={5}>
        <Grid item sx={12} lg={4}>
          <Box>
            <MainCard title="Profile detailes">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <AvatarImg width="150px" height="150px" />
                <Typography sx={{ fontSize: "18px", mt: 1 }}>
                  Lucy Lavender
                </Typography>
                <Typography>Lead Developer</Typography>
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignContent={"center"}
                  py={2}
                  gap={2}
                >
                  <CustomButton size="small">Follow</CustomButton>
                  <CustomButton>Message</CustomButton>
                </Box>
              </Box>
            </MainCard>
            <MainCard title="Skills">
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                flexWrap="wrap"
                sx={{ width: { lg: "70%", md: "80%", xs: "100%" }, mx: "auto" }}
              >
                {skills.map((item, i) => (
                  <Chip
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: 1, margin: "2px" }}
                    color={item === "HTML" ? "primary" : "secondary"}
                    label={item}
                  />
                ))}
              </Box>
            </MainCard>
            <MainCard title={"About"}>
              <Box>
                <Typography
                  sx={{ mb: 1 }}
                  alignItems={"center"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <HomeOutlined fontSize={"small"} />
                  Lives in
                  <MyLink>San Fransisco, SA</MyLink>
                </Typography>
                <Typography
                  alignItems={"center"}
                  sx={{ mb: 1 }}
                  display={"flex"}
                  gap={"10px"}
                >
                  <AccountBalanceOutlined fontSize={"small"} />
                  Works at
                  <MyLink>Material UI</MyLink>
                </Typography>
                <Typography
                  sx={{ mb: 1 }}
                  alignItems={"center"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <LocationOnOutlined fontSize={"small"} />
                  Lives in
                  <MyLink>Boston</MyLink>
                </Typography>
              </Box>
            </MainCard>
            <MainCard title={"Elsewhere"}>
              <Box>
                <Typography
                  sx={{ mb: 1 }}
                  alignItems={"center"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <IosShareOutlined fontSize={"small"} />
                  <MyLink>lucylavender.io</MyLink>
                </Typography>
                <Typography
                  alignItems={"center"}
                  sx={{ mb: 1 }}
                  display={"flex"}
                  gap={"10px"}
                >
                  <Twitter fontSize={"small"} />
                  <MyLink>Twitter</MyLink>
                </Typography>
                <Typography
                  sx={{ mb: 1 }}
                  alignItems={"center"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <FacebookOutlined fontSize={"small"} />
                  <MyLink>Facebook</MyLink>
                </Typography>
                <Typography
                  sx={{ mb: 1 }}
                  alignItems={"center"}
                  display={"flex"}
                  gap={"10px"}
                >
                  <Instagram fontSize={"small"} />
                  <MyLink>Instagram</MyLink>
                </Typography>
              </Box>
            </MainCard>
          </Box>
        </Grid>
        <Grid item sx={12} lg={8}>
          <MainCard title="Sales / Revenue">
            <BarChart datasetsItem={datasetsItem} />
          </MainCard>
          <Grid container spacing={2}>
            <Grid item sx={12} lg={4}>
              <StaticsCard
                title={"$ 2.405"}
                icon={<AttachMoney color="primary" />}
                name={"Total Earnings"}
                percent={"75"}
              />
            </Grid>
            <Grid item sx={12} lg={4}>
              <StaticsCard
                title={"30"}
                icon={<LocalMall color="primary" />}
                name={"Orders Today"}
                percent={"25"}
              />
            </Grid>
            <Grid item sx={12} lg={4}>
              <StaticsCard
                title={"$ 1.224"}
                icon={<AttachMoney color="primary" />}
                name={"Total Earnings"}
                percent={"50"}
              />
            </Grid>
          </Grid>
          <MainCard title="Products">
            <SimpleTable />
          </MainCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
