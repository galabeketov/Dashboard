import { Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
function DoughnutChart() {
  Chart.register(CategoryScale);
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [2, 1.2, 1.4, 1],
        backgroundColor: ["blue", "red", "orange", "#F2F1EF"],
        borderWidth: ["6"],
        borderRadius: ["3"],
        borderAlign: ["center"],
        hoverOffset: ["8"],
        cutout: ["80%"],
      },
    ],
  };
  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart, args, options) {
      const {
        ctx,
        data,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      ctx.font = "normal 30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("+27%", width / 2, height / 2 + top - 15);
      ctx.restore();
      ctx.font = "normal 24px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("more sales", width / 2, height / 2 + top + 15);
    },
  };
  const options = {
    rotation: 1 * Math.PI,
    // circumference: 1 * Math.PI,
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} plugins={[hoverLabel]} />
    </>
  );
}

export default DoughnutChart;
