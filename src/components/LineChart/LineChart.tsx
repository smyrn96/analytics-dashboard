import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import type { StatsResponse } from "../../types/stats";
import "chartjs-adapter-date-fns";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale, // ✅ Register this
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

type LineChartPropsType = {
  data: StatsResponse;
};

const LineChart: React.FC<LineChartPropsType> = ({ data }) => {
  // Group data by company for separate lines
  const companies = Array.from(new Set(data.map((d) => d.company)));

  const datasets = companies.map((company) => {
    const companyData = data
      .filter((d) => d.company === company)
      .map((d) => ({ x: d.time, y: d.price }));

    return {
      label: company,
      data: companyData,
      fill: false,
      tension: 0.3,
    };
  });

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Price Over Time per Company",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "week",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Price (€)",
        },
      },
    },
  };

  return (
    <div className="h-[350px] bg-white border border-gray-200 rounded-2xl p-3 flex items-center justify-center">
      {data && <Line key={Date.now()} data={{ datasets }} options={options} />}
    </div>
  );
};

export default LineChart;
