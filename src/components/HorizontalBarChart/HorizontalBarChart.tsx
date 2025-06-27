// HorizontalBarChart.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { CarResponse } from "../../types/car";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartPropsType {
  plotData: CarResponse | null;
}

const HorizontalBarChart = ({ plotData }: HorizontalBarChartPropsType) => {
  const carsData = plotData ?? [];

  const data = {
    labels: carsData.map((car) => car.manufacturer),
    datasets: [
      {
        label: "Horsepower",
        data: carsData.map((car) => car.horsepower),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Range (km)",
        data: carsData.map((car) => car.range),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Engine capacity",
        data: carsData.map((car) => car.engine_capacity),
        backgroundColor: "rgba(11, 157, 45, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Metrics by Car Manufacturer",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Metric Value (HP or km or engine capacity)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Car Manufacturer",
        },
      },
    },
  };

  return (
    <div className=" h-[350px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-center">
      {plotData && <Bar data={data} options={options} />}
    </div>
  );
};

export default HorizontalBarChart;
