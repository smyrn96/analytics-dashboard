import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import type { CarResponse } from "../../types/car";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

interface ScatterPlotPropsType {
  plotData: CarResponse | null;
}

const ScatterPlot = ({ plotData }: ScatterPlotPropsType) => {
  const carsData = plotData ?? [];

  const data: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Car Data",
        data: carsData.map((car) => {
          return { x: car.horsepower, y: car.range };
        }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Horsepower vs Range",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Horsepower (HP)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Range (km)",
        },
      },
    },
  };

  return (
    <div className="h-[350px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-center">
      {plotData && <Scatter data={data} options={options} />}
    </div>
  );
};

export default ScatterPlot;
