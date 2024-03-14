import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: {
        stepSize: 1,
      },
      grid: {
        lineWidth: 1.5,
        color: "#e7e7f4",
      },
      ticks: {
        backdropColor: "rgba(255, 255, 255, 0)",
      },
    },
  },
};

export const data = {
  labels: [
    "Strength",
    "Speed",
    "Reaction",
    "Jump",
    "Technique",
    "Stamina",
    "Game IQ",
    "Physique",
  ],

  datasets: [
    {
      label: "PTS",
      data: [10, 8, 10, 9, 8, 9, 9, 9],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
  ],
};

console.log(data);

export const Chart = () => {
  return <Radar options={options} data={data} />;
};
