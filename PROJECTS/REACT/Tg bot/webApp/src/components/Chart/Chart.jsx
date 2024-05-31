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
import { useTelegram } from "../../hooks/useTelegram";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const { storage } = dataset();
const { tg } = useTelegram();

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
    "Mental",
  ],

  datasets: [
    {
      label: "Max",
      data: storage[0].max,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Tema",
      data: storage[1].tema,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235)",
    },
    {
      label: "Fedya",
      data: storage[2].fedya,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 230, 171)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 230, 171)",
    },
    {
      label: "Barca",
      data: storage[3].barca,
      hidden: true,
      backgroundColor: "rgba(166, 222, 223, 0.3)",
      borderColor: "rgba(166, 222, 223, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(166, 222, 223)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(166, 222, 223)",
    },
    {
      label: "Jane",
      data: storage[4].jane,
      hidden: true,
      backgroundColor: "rgba(203, 177, 255, 0.3)",
      borderColor: "rgba(203, 177, 255, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(203, 177, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(203, 177, 255)",
    },
    {
      label: "Nina",
      data: storage[5].nina,
      hidden: true,
      backgroundColor: "rgba(255, 206, 160, 0.3)",
      borderColor: "rgba(255, 206, 160, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 206, 160)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 206, 160)",
    },
    {
      label: "Sveta",
      data: storage[6].sveta,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Paul",
      data: storage[7].paul,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235)",
    },
    {
      label: "Mario",
      data: storage[8].mario,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 230, 171)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 230, 171)",
    },
    {
      label: "Gleb",
      data: storage[9].gleb,
      hidden: true,
      backgroundColor: "rgba(166, 222, 223, 0.3)",
      borderColor: "rgba(166, 222, 223, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(166, 222, 223)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(166, 222, 223)",
    },
    {
      label: "Polly",
      data: storage[10].polly,
      hidden: true,
      backgroundColor: "rgba(203, 177, 255, 0.3)",
      borderColor: "rgba(203, 177, 255, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(203, 177, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(203, 177, 255)",
    },
    {
      label: "Anya",
      data: storage[11].anya,
      hidden: true,
      backgroundColor: "rgba(255, 206, 160, 0.3)",
      borderColor: "rgba(255, 206, 160, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 206, 160)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 206, 160)",
    },
    {
      label: "Ox",
      data: storage[12].ox,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Samu",
      data: storage[13].samu,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235)",
    },
    {
      label: "BD",
      data: storage[14].bd,
      hidden: true,
      backgroundColor: "rgba(255, 230, 171, 0.3)",
      borderColor: "rgba(255, 230, 171, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 230, 171)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 230, 171)",
    },
    // Jane Jr. was here
    {
      label: "Vera",
      data: storage[16].vera,
      hidden: true,
      backgroundColor: "rgba(203, 177, 255, 0.3)",
      borderColor: "rgba(203, 177, 255, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(203, 177, 255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(203, 177, 255)",
    },
    // Dante was here
    {
      label: "Maxim",
      data: storage[18].max2,
      hidden: true,
      backgroundColor: "rgba(255, 99, 132, 0.3)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Vlad",
      data: storage[19].vlad2,
      hidden: true,
      backgroundColor: "rgba(54, 162, 235, 0.3)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 4,

      fill: true,
      pointBorderWidth: 1,
      pointBackgroundColor: "rgba(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(54, 162, 235)",
    },
  ],
};

// options for chart
export const options = {
  scales: {
    r: {
      angleLines: {
        display: true,
        lineWidth: 3,
      },
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: {
        stepSize: 2,
        font: { size: 12, weight: "bold" },
        backdropColor: "rgba(255, 255, 255, 0)",
      },
      grid: {
        lineWidth: 3,
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
      from: 0.15,
      to: 0,
      loop: true,
    },
  },

  elements: {
    point: { pointStyle: "circle", radius: 4 },
  },
};

// options for dark chart
export const optionsDark = {
  scales: {
    r: {
      angleLines: {
        display: true,
        lineWidth: 3,
        color: "rgba(223, 243, 255, 0.5)",
      },
      suggestedMin: 0,
      suggestedMax: 10,
      ticks: {
        stepSize: 2,
        font: { size: 12, weight: "bold" },
        backdropColor: "rgba(255, 255, 255, 0)",
        color: "rgba(255, 255, 255)",
      },
      grid: {
        lineWidth: 3,
        color: "rgba(223, 243, 255, 0.5)",
      },
      pointLabels: {
        font: {
          size: 14,
          weight: "bold",
        },
        color: "rgba(225, 225, 225)",
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
        color: "rgba(225, 225, 225)",
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
      from: 0.15,
      to: 0,
      loop: true,
    },
  },

  elements: {
    point: { pointStyle: "circle", radius: 4 },
  },
};

export const Chart = () => {
  return (
    <>
      {tg.colorScheme === "light" ? (
        <Radar options={options} data={data} />
      ) : (
        <Radar options={optionsDark} data={data} />
      )}
    </>
  );
};
