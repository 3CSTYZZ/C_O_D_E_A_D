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
import { dataset } from "../../data/dataset";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const { storage } = dataset();

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
    {
      label: "Alex",
      data: storage[8].alex,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,
    },
    {
      label: "Gleb",
      data: storage[9].gleb,
      hidden: true,
      backgroundColor: "rgba(166, 222, 223, 0.3)",
      borderColor: "rgba(166, 222, 223, 1)",
      borderWidth: 4,
    },
    {
      label: "Polly",
      data: storage[10].polly,
      hidden: true,
      backgroundColor: "rgba(203, 177, 255, 0.3)",
      borderColor: "rgba(203, 177, 255, 1)",
      borderWidth: 4,
    },
    {
      label: "Anya",
      data: storage[11].anya,
      hidden: true,
      backgroundColor: "rgba(255, 206, 160, 0.3)",
      borderColor: "rgba(255, 206, 160, 1)",
      borderWidth: 4,
    },
    {
      label: "Ox",
      data: storage[12].ox,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,
    },
    {
      label: "Samu",
      data: storage[13].samu,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,
    },
    {
      label: "BD",
      data: storage[14].bd,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,
    },
    {
      label: "Jenya",
      data: storage[15].jenya,
      hidden: true,
      backgroundColor: "rgba(166, 222, 223, 0.3)",
      borderColor: "rgba(166, 222, 223, 1)",
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
      position: "bottom",
      labels: {
        font: {
          size: 14,
          weight: "bold",
        },
        padding: 20,
        // color: "green",
        textAlign: "left",
        usePointStyle: true,
        pointStyleWidth: 14,
        pointStyle: "rectRot",
      },
    },
  },

  animations: {
    tension: {
      duration: 1500,
      easing: "easeInOutQuad",
      from: 0.2,
      to: 0,
      loop: true,
    },
  },

  elements: {
    point: { pointStyle: "rectRot", radius: 2 },
  },
};

console.log(options);

export const Chart = () => {
  return <Radar options={options} data={data} />;
};
