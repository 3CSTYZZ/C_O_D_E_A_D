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
    tema: [8, 7, 6, 8, 8, 7, 8, 6],
  },
  {
    fedya: [7, 10, 9, 7, 8, 10, 9, 9],
  },
  {
    barca: [8, 7, 8, 9, 8, 8, 7, 8],
  },
  {
    jane: [6, 9, 8, 7, 7, 9, 8, 9],
  },
  {
    nina: [7, 6, 7, 6, 8, 6, 8, 7],
  },
  {
    sveta: [7, 7, 8, 6, 8, 8, 8, 7],
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
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
    {
      label: "Tema",
      data: storage[1].tema,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,
    },
    {
      label: "Fedya",
      data: storage[2].fedya,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,
    },
    {
      label: "Barca",
      data: storage[3].barca,
      hidden: true,
      backgroundColor: "rgba(166, 222, 223, 0.3)",
      borderColor: "rgba(166, 222, 223, 1)",
      borderWidth: 4,
    },
    {
      label: "Jane",
      data: storage[4].jane,
      hidden: true,
      backgroundColor: "rgba(203, 177, 255, 0.3)",
      borderColor: "rgba(203, 177, 255, 1)",
      borderWidth: 4,
    },
    {
      label: "Nina",
      data: storage[5].nina,
      hidden: true,
      backgroundColor: "rgba(255, 206, 160, 0.3)",
      borderColor: "rgba(255, 206, 160, 1)",
      borderWidth: 4,
    },
    {
      label: "Sveta",
      data: storage[6].sveta,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
    {
      label: "Paul",
      data: storage[7].paul,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
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
      from: 0.15,
      to: 0,
      loop: true,
    },
  },
};

export const Chart = () => {
  return <Radar options={options} data={data} />;
};
