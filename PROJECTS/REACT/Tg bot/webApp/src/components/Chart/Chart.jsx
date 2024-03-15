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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// player's pts
const storage = [
  {
    max: [10, 8, 10, 9, 8, 9, 9, 9],
  },
  {
    paul: [7, 7, 7, 10, 6, 8, 8, 7],
  },
];

// main data of chart
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
      label: "Max",
      data: storage[0].max,
      // hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
    {
      label: "Paul",
      data: storage[1].paul,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
  ],
};

// options for chart
export const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
        color: "#e7eaeb",
        lineWidth: 2,
      },
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: {
        stepSize: 2,
        backdropColor: "rgba(255, 255, 255, 0)",
      },
      grid: {
        lineWidth: 2,
      },
      pointLabels: {
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
  },
  animations: {
    tension: {
      duration: 1500,
      easing: "easeInOutQuad",
      from: 0.1,
      to: 0,
      loop: true,
    },
  },
};

export const Chart = () => {
  return <Radar options={options} data={data} />;
};
