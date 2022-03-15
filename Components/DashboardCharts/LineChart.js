import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
function LineChart() {
  Chart.register(CategoryScale);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [2, 1.4, 1.3, 1.5, 1.8, 2, 2.3, 2.5, 2.6, 3, 2.9, 3],
        borderColor: ["rgb(55, 111, 208)"],
        backgroundColor: ["gray"],
        pointBackgroundColor: "blue",
        pointBorderColor: "white",
      },
      {
        label: "",
        data: [1, 1.2, 1.1, 1.2, 1.3, 1.6, 1.3, 1.5, 1.6, 1.3, 1.9, 2],
        borderColor: ["gray"],
        backgroundColor: ["gray"],
        pointBackgroundColor: "gray",
        pointBorderColor: "white",
        borderDash: [10, 5],
      },
    ],
  };
  const options = {
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: false,
      // text: "My Chart",
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
