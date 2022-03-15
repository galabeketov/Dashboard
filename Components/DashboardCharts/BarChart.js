import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
function BarChart({ datasetsItem }) {
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
        data: [40, 30, 50, 20, 60, 80, 60, 55, 40, 30, 40, 0],
        borderColor: ["rgb(55, 111, 208)"],
        backgroundColor: ["blue"],
        barPercentage: ["0.3"],
        borderRadius: ["10  "],
      },
      { ...(datasetsItem || {}) },
    ],
  };

  const options = {
    title: {
      display: false,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default BarChart;
